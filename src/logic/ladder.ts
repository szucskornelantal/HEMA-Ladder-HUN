import * as date from 'date-fns';
import { loadJSON } from './utils';

export type Season = {
  name: string;
  folder: string;
};

function parseSeason(json: Record<string, unknown>): Season {
  return {
    name: json.name as string,
    folder: json.folder as string,
  };
}

export enum Category {
  MEN_OPEN = 'mo',
  WOMEN = 'w',
}

export const categoryReverseMap = {
  mo: Category.MEN_OPEN,
  w: Category.WOMEN,
};

export enum Division {
  LS = 'ls', // long sworkd
  SAB = 'sab', // sword & buckler
  R = 'r', // rapier
  RAD = 'rad', // rapier & dagger
  SB = 'sb', // saber
  M = 'm', // messer
  SS = 'ss', // sidesword
  SM = 'sm', // smallword
  B = 'b', // bayonet
}

export const divisionReverseMap = {
  ls: Division.LS,
  sab: Division.SAB,
  r: Division.R,
  rad: Division.RAD,
  sb: Division.SB,
  m: Division.M,
  ss: Division.SS,
  sm: Division.SM,
  b: Division.B,
};

export enum View {
  LADDER = 'ladder',
  CLUBS = 'clubs',
  TOURNAMENTS = 'tournaments',
}

export const viewReverseMap = {
  ladder: View.LADDER,
  clubs: View.CLUBS,
  tournaments: View.TOURNAMENTS,
};

export type TournamentResultEntry = {
  fencer_id: string;
  rank: number;
};

export type Competition = {
  subtitle?: string;
  division: Division;
  category: Category;
  no_participants: number;
  results: TournamentResultEntry[];
  results_link?: string;
};

export type Tournament = {
  name: string;
  date: Date;
  country: string;
  championship: boolean;
  competitions: Competition[];
};

export type Tournaments = Record<string, Tournament>;

function parseTournaments(json: Record<string, unknown>): Tournaments {
  const res = {} as Tournaments;
  Object.keys(json).forEach((k) => {
    const d = json[k] as {
      name: string;
      date: string;
      country: string;
      championship: boolean;
      competitions: Record<string, unknown>[];
    };
    res[k] = {
      name: d.name,
      date: date.parseISO(d.date),
      country: d.country,
      championship: d.championship,
      competitions: d.competitions.map(parseCompetition),
    };
  });
  return res;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseCompetition(json: Record<string, any>): Competition {
  return {
    subtitle: json['subtitle'] ?? undefined,
    division:
      divisionReverseMap[json['division'] as keyof typeof divisionReverseMap],
    category:
      categoryReverseMap[json['category'] as keyof typeof categoryReverseMap],
    no_participants: json['no_participants'],
    results: parseResults(json['results']),
    results_link: json['results_link'],
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseResults(json: Record<string, any>[]): TournamentResultEntry[] {
  return json.map((result) => {
    return {
      fencer_id: result['fencer_id'],
      rank: result['rank'],
    };
  });
}

export type People = Record<string, Person>;
export type Person = {
  id: string;
  name: string;
  surname: string;
  nationality?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parsePeople(json: Record<string, any>): People {
  const res = {} as People;
  Object.keys(json).forEach((k) => {
    res[k] = {
      id: k,
      name: json[k].name,
      surname: json[k].surname,
      nationality: json[k].nationality,
    };
  });
  return res;
}

export type Clubs = Record<string, Club>;
export type Club = {
  id: string;
  name: string;
  country: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseClubs(json: Record<string, any>): Clubs {
  const res = {} as Clubs;
  Object.keys(json).forEach((k) => {
    res[k] = {
      id: k,
      name: json[k].name,
      country: json[k].country,
    };
  });
  return res;
}

export type PeopleClubs = Record<string, string>;

function parsePeopleClubs(json: Record<string, unknown>): PeopleClubs {
  return json as PeopleClubs;
}

export type Coefficient = {
  c: number;
  type: string;
};

export type TournamentLadderEntry = {
  tournament_id: string;
  competition_idx: number;
  coefficients: Coefficient[];
  base_points: number;
  rank: number;
  points: number;
};

export type LadderIndividualEntry = {
  fencer_id: string;
  rank: number;
  last_season_rank?: number;
  points: number;
  counted_tournaments: TournamentLadderEntry[];
  uncounted_tournaments: TournamentLadderEntry[];
};

export type LadderClubEntry = {
  club_id: string;
  points: number;
  fencers: {
    fencer_id: string;
    points: number;
  }[];
};

export type LadderIndividual = LadderIndividualEntry[];
export type LadderClub = LadderClubEntry[];
export type LaddersIndividual = {
  [D in Division]?: { [C in Category]?: LadderIndividual };
};
export type LaddersClub = {
  [D in Division]?: { [C in Category]?: LadderClub };
};

function parseLaddersIndividual(
  json: Record<string, unknown>
): LaddersIndividual {
  return Object.keys(json).reduce((divs, div) => {
    const d: Division =
      divisionReverseMap[div as keyof typeof divisionReverseMap];
    divs[d] = Object.keys(json[div] as Record<string, unknown>).reduce(
      (cats, cat) => {
        const c: Category =
          categoryReverseMap[cat as keyof typeof categoryReverseMap];
        cats[c] = parseLadderIndividual(
          (json[div] as Record<string, unknown>)[cat] as Record<
            string,
            unknown
          >[]
        );
        return cats;
      },
      {} as { [C in Category]?: LadderIndividual }
    );
    return divs;
  }, {} as LaddersIndividual);
}

function parseLadderIndividual(
  json: Record<string, unknown>[]
): LadderIndividual {
  return json.map(parseLadderIndividualEntry);
}

function parseLadderIndividualEntry(
  json: Record<string, unknown>
): LadderIndividualEntry {
  return {
    fencer_id: json['fencer_id'] as string,
    rank: json['rank'] as number,
    last_season_rank: json['last_season_rank'] as number | undefined,
    points: json['points'] as number,
    counted_tournaments: (
      json['counted_tournaments'] as Record<string, unknown>[]
    ).map(parseTournamentLadderEntry),
    uncounted_tournaments: (
      json['uncounted_tournaments'] as Record<string, unknown>[]
    ).map(parseTournamentLadderEntry),
  };
}

function parseTournamentLadderEntry(
  json: Record<string, unknown>
): TournamentLadderEntry {
  return {
    tournament_id: json['tournament_id'] as string,
    competition_idx: json['competition_idx'] as number,
    rank: json['rank'] as number,
    base_points: json['base_points'] as number,
    coefficients: (json['coefficients'] as Record<string, unknown>[]).map(
      parseCoefficient
    ),
    points: json['points'] as number,
  };
}

function parseCoefficient(json: Record<string, unknown>): Coefficient {
  return {
    c: json['c'] as number,
    type: json['type'] as string,
  };
}

function parseLaddersClub(json: Record<string, unknown>): LaddersClub {
  return Object.keys(json).reduce((divs, div) => {
    const d: Division =
      divisionReverseMap[div as keyof typeof divisionReverseMap];
    divs[d] = Object.keys(json[div] as Record<string, unknown>).reduce(
      (cats, cat) => {
        const c: Category =
          categoryReverseMap[cat as keyof typeof categoryReverseMap];
        cats[c] = parseLadderClub(
          (json[div] as Record<string, unknown>)[cat] as Record<
            string,
            unknown
          >[]
        );
        return cats;
      },
      {} as { [C in Category]?: LadderClub }
    );
    return divs;
  }, {} as LaddersClub);
}

function parseLadderClub(json: Record<string, unknown>[]): LadderClub {
  return json.map(parseLadderClubEntry);
}

function parseLadderClubEntry(json: Record<string, unknown>): LadderClubEntry {
  return {
    club_id: json['club_id'] as string,
    points: json['points'] as number,
    fencers: (json['fencers'] as Record<string, unknown>[]).map((entry) => {
      return {
        fencer_id: entry['fencer_id'] as string,
        points: entry['points'] as number,
      };
    }),
  };
}

// loading data //

export async function loadPeople(): Promise<People> {
  return parsePeople(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (await loadJSON('data/people.json')) as Record<string, any>
  );
}

export async function loadClubs(): Promise<Clubs> {
  return parseClubs(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (await loadJSON('data/clubs.json')) as Record<string, any>
  );
}

export async function loadSeasons(): Promise<Season[]> {
  return (
    (await loadJSON('data/seasons.json')) as Record<string, unknown>[]
  ).map(parseSeason);
}

export async function loadPeopleClubs(season: string): Promise<PeopleClubs> {
  return parsePeopleClubs(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (await loadJSON(`data/seasons/${season}/people-clubs.json`)) as Record<
      string,
      unknown
    >
  );
}

export async function loadTournaments(season: string): Promise<Tournaments> {
  return parseTournaments(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (await loadJSON(`data/seasons/${season}/tournaments.json`)) as Record<
      string,
      unknown
    >
  );
}

export async function loadLaddersIndividual(
  season: string
): Promise<LaddersIndividual> {
  return parseLaddersIndividual(
    (await loadJSON(
      `data/seasons/${season}/ladders-individual.json`
    )) as Record<string, unknown>
  );
}

export async function loadLaddersClub(season: string): Promise<LaddersClub> {
  return parseLaddersClub(
    (await loadJSON(`data/seasons/${season}/ladders-club.json`)) as Record<
      string,
      unknown
    >
  );
}
