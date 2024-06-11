export const texts = {
  'cs-CZ': {
    appName: 'Neoficiální český HEMA žebříček',
    appDescription: undefined,
    supplyResultsText: `Pokud v žebříčku nejsou zahrnuty výsledky turnaje, kde jste byli, dejte prosím vědět, a to následujícím způsobem:
    <ol>
      <li>
        Připravte si data:
        <ul>
          <li>Název turnaje</li>
          <li>Datum konání<sup>1</sup></li>
          <li>Země, ve které se turnaj odehrával</li>
          <li>Stránka či FB událost turnaje, existuje-li</li>
          <li>Stránka turnaje na HEMA Ratings, existuje-li</li>
          <li>
            Výsledky pro každou divizi<sup>2</sup> a kategorii<sup
              >3</sup
            >
            sestávající se z
            <ul>
              <li>Celkový počet účastníků v dané divizi a kategorii</li>
              <li>
                Seznam výsledků lidí, které chcete doplnit<sup>4</sup>.
                Pro každého člověka uveďte
                <ul>
                  <li>Jméno a příjmení</li>
                  <li>
                    Konečná příčka, na jaké se umístil(a) na konci
                    turnaje
                  </li>
                  <li>
                    Jeho/její HEMA Ratings ID<sup>5</sup>, existuje-li
                  </li>
                  <li>Klub, za který startoval(a)</li>
                  <li>
                    HEMA Ratings ID klubu<sup>6</sup>, existuje-li
                  </li>
                </ul>
              </li>
              <li>Odkaz na výsledkovou listinu zveřejněnou organizátory, existuje-li (odkaz na stránku na OnlyFence, HEMA Scorecard, HEMAGON, post u FB události, či cokoliv jiného, z čeho jde vyčíst alespoň částečné výsledky).</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Data odešlete na
        <a href="mailto:zegkljan{'@'}gmail.com">zegkljan{'@'}gmail.com</a> a do
        předmětu uveďte <em>Data pro HEMA žebříček</em>.
      </li>
      <li>
        Vyčkejte, než data zapracuji, případně reagujte na mé doplňující dotazy.
      </li>
    </ol>`,
    supplyResultsFootnotes: `<ol>
      <li>V případě vícedenního turnaje uveďte první den.</li>
      <li>Divize jsou: dlouhý meč, rapír a dýka, šavle...</li>
      <li>Kategorie jsou: muži/open, ženy, dívky do 10 let...</li>
      <li>
        Evidujeme jen šermíře startující za české kluby, případně české
        šermíře, kteří soutěží bez klubu.
      </li>
      <li>
        Číslo v adrese stránky "profilu" daného člověka na HEMA Ratings.<br />
        Příklad: Jan Žegklitz má stránku
        <a href="https://hemaratings.com/fighters/details/3631/"
          >https://hemaratings.com/fighters/details/<strong
            >3631</strong
          ></a
        >
        a tedy jeho ID je 3631.
      </li>
      <li>
        Číslo v adrese stránky "profilu" daného klubu na HEMA Ratings.<br />
        Příklad: SHŠ Krkavci mají stránku
        <a href="https://hemaratings.com/clubs/details/362/"
          >https://hemaratings.com/clubs/details/<strong>362</strong></a
        >
        a tedy jejich ID je 362.
      </li>
    </ol>`,
    coefficientTypes: {
      foreign: 'Zahraniční turnaj',
      foreign_25_50: 'Zahraniční účast 25-50 %',
      foreign_50_75: 'Zahraniční účast 50-75 %',
      foreign_75_100: 'Zahraniční účast >75 %',
      championship: 'Mistrovství',
      rank_1: 'První místo',
      rank_2: 'Druhé místo',
      rank_3: 'Třetí místo',
      rank_4: 'Čtvrté místo',
    }
  },
  'en-US': {
    appName: 'Unofficial czech HEMA ladder',
    appDescription: undefined,
    supplyResultsText: `If the ladder does not include results of a tournament you attended, please let me know like this:
    <ol>
      <li>
        Prepare the data:
        <ul>
          <li>Tournament name</li>
          <li>Date of the tournament<sup>1</sup></li>
          <li>Country the tournament took place in</li>
          <li>Web page or FB event of the tournament, if one exists</li>
          <li>HEMA Ratings page of the tournament, if one exists</li>
          <li>Results for each division<sup>2</sup> and category<sup>3</sup> comprising of
            <ul>
              <li>The total number of participants in the given division and category.</li>
              <li>
                List of results of people you want to add<sup>4</sup>.
                For each person state
                <ul>
                  <li>Name and surname</li>
                  <li>Their final rank at the end of the tournament</li>
                  <li>Their HEMA Ratings ID<sup>5</sup>, if one exists</li>
                  <li>Club they represented</li>
                  <li>HEMA Ratings ID of the club<sup>6</sup>, if one exists</li>
                </ul>
              </li>
              <li>Odkaz na výsledkovou listinu zveřejněnou organizátory, existuje-li (odkaz na stránku na OnlyFence, HEMA Scorecard, HEMAGON, post u FB události, či cokoliv jiného, z čeho jde vyčíst alespoň částečné výsledky).</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Send the data to
        <a href="mailto:zegkljan{'@'}gmail.com">zegkljan{'@'}gmail.com</a> and state
        <em>HEMA ladder data</em> in the subject.
      </li>
      <li>
        Wait untill I incorporate the data, possibly react to my supplementary questions.
      </li>
    </ol>`,
    supplyResultsFootnotes: `<ol>
    <li>In case of multi-day tournament state the first day.</li>
    <li>Divisions are: long sword, rapier and dagger, saber...</li>
    <li>Categories are: men/open, women, girls under 10 years...</li>
    <li>
      We record only fencers representing Czech clubs, or Czech fencers competing without any club.
    </li>
    <li>
      The number in the address of the "profile" page on HEMA Ratings of the given person.<br />
      Example: Jan Žegklitz has page
      <a href="https://hemaratings.com/fighters/details/3631/"
        >https://hemaratings.com/fighters/details/<strong
          >3631</strong
        ></a
      >
      a therefore his ID is 3631.
    </li>
    <li>
      The number in the address of the "profile" page of on HEMA Ratings of the given club.<br />
      Example: SHŠ Krkavci have page
      <a href="https://hemaratings.com/clubs/details/362/"
        >https://hemaratings.com/clubs/details/<strong>362</strong></a
      >
      a therefore their ID is 362.
    </li>
  </ol>`,
    coefficientTypes: {
      foreign: 'Tournament abroad',
      foreign_25_50: '25-50 % participants from abroad',
      foreign_50_75: '50-75 % participants from abroad',
      foreign_75_100: '>75 % participants from abroad',
      championship: 'Championship',
      rank_1: 'First place',
      rank_2: 'Second place',
      rank_3: 'Third place',
      rank_4: 'Fourth place',
    }
  },
};

export const config = {
  fbLink: 'https://facebook.com/HEMAzebricekCZ',
  enabledLocales: ['cs-CZ', 'en-US'],
  defaultLocale: 'cs-CZ',
  url: 'https://hemaladder.zegkljan.net',
};
