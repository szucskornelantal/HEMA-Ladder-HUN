export const texts = {
  'hu-HU': {
    appName: 'Magyar HEMA vívórangsor',
    appDescription: undefined,
    supplyResultsText: `Ha a rendszerben nem szerepel egy verseny, amin részt vettél, kérlek az alábbi módon tudasd:
    <ol>
      <li>
        Adatok előkészítése:
        <ul>
          <li>Verseny neve</li>
          <li>Verseny időpontja<sup>1</sup></li>
          <li>Rendező ország</li>
          <li>Ha van, akkor a verseny Facebook eseménye-li</li>
          <li>Ha van, akkor a verseny Hemaratings oldala-li</li>
          <li>
            Az eredmények minden kategóriában<sup>2</sup> és fegyvernemben<sup
              >3</sup
            >
           az imént látható módon
            <ul>
              <li>Az összes résztvevő kategóriánként és fegyvernemenként</li>
              <li>
               A vívók és az eredmények, amiket hozzá szeretnél adni az adatbázishoz<sup>4</sup>.
                Minden vívónak szükséges:
                <ul>
                  <li>Teljes név</li>
                  <li>
                    Végső helyezés a tornán (az első 4-en kívül a legmagasabb elérhető helyezés, tehát a legjobb 8-ban az 5. hely, legjobb 16-ban a 9. és így tovább)
                  </li>
                  <li>
                   Hemaratings ID <sup>5</sup>, ha van-li
                  </li>
                  <li>klub, amit képvisel</li>
                  <li>
                    A klub Hemarating ID-je <sup>6</sup> , ha van -li
                  </li>
                </ul>
              </li>
              <li>Link az eredményekhez, ha van (lehet bármilyen ezzel foglalkozó felület: OnlyFence, HEMA Scorecard, HEMAGON, Facebook poszt a verseny eseményénél.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Az adatokat küldd az alábbi email címre
        <a href="mailto:szucskornelMHS{'@'}gmail.com">szucskornelMHS{'@'}gmail.com</a>
        a Tárgyban <em> írd, hogy MHS vívórangsor </em>.
      </li>
      <li>
        Az adatokat a lehető leggyorsabban feldolgozom, és válaszolok kérdésekre.
      </li>
    </ol>`,
    supplyResultsFootnotes: `<ol>
      <li>Többnapos verseny esetén kérlek, az első napot add meg.</li>
      <li>Fegyvernemek: Hosszúkard (bővítésre vár)...</li>
      <li>Kategóriák: Férfi/nyílt, női, kezdő </li>
      <li>
        Csak Magyar klubbokban vívó vagy klubb nélküli magyar vívók szerepelnek a rangsorban.
      </li>
      <li>
       A Hemaratins ID az a szám, amely egyes vívóknak a saját oldaluk elérhetőségében található.<br />
        Például: Szücs Kornél Antal
        <a href="https://hemaratings.com/fighters/details/9346/"
          >https://hemaratings.com/fighters/details/<strong
            >9346</strong
          ></a
        >
        az ID tehát 9346.
      </li>
      <li>
       Klubboknál ugyanez a helyzet:<br />
        Példa: Kard Rendje ViSE
        <a href="https://hemaratings.com/clubs/details/291/"
          >https://hemaratings.com/clubs/details/<strong>291</strong></a
        >
       az ID tehát 291.
      </li>
    </ol>`,
    coefficientTypes: {
      foreign: 'Külföldi verseny',
      foreign_25_50: 'Külföldi vívók aránya 25-50 %',
      foreign_50_75: 'Külföldi vívók aránya 50-75 %',
      foreign_75_100: 'Külföldi vívók aránya >75 %',
      championship: 'Nagydíj',
      rank_1: 'Első helyezés',
      rank_2: 'Második helyezés',
      rank_3: 'Harmadik helyezés',
      rank_4: 'negyedik helyezés',
      rank_5: 'Top-8',
      rank_9: 'Top-16',
      rank_17: 'Top-32'
    }
  },
  'en-US': {
    appName: 'Hungarian HEMA ladder',
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
              <li>Link to any relevant site for results (for example: OnlyFence, HEMA Scorecard, HEMAGON).</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Send the data to
        <a href="mailto:szucskornelMHS{'@'}gmail.com">szucskornelMHS{'@'}gmail.com</a> and state
        <em>MHS Ranking</em> in the subject.
      </li>
      <li>
        Wait untill I incorporate the data, possibly react to my supplementary questions.
      </li>
    </ol>`,
    supplyResultsFootnotes: `<ol>
    <li>In case of multi-day tournament state the first day.</li>
    <li>Divisions are: long sword...</li>
    <li>Categories are: men/open, women .</li>
    <li>
      We record only fencers representing Hungarian clubs, or Hungarian fencers competing without any club.
    </li>
    <li>
      The number in the address of the "profile" page on HEMA Ratings of the given person.<br />
      Example: Szücs Kornél Antal has page
      <a href="https://hemaratings.com/fighters/details/9346/"
        >https://hemaratings.com/fighters/details/<strong
          >9346</strong
        ></a
      >
      a therefore his ID is 9346.
    </li>
    <li>
      The number in the address of the "profile" page of on HEMA Ratings of the given club.<br />
      Example: Kard Rendje ViSE
      <a href="https://hemaratings.com/clubs/details/291/"
        >https://hemaratings.com/clubs/details/<strong>291</strong></a
      >
      a therefore their ID is 291.
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
      rank_5: 'Top-8',
      rank_9: 'Top-16',
      rank_17: 'Top-32'
    }
  },
};

export const config = {
  fbLink: 'https://www.facebook.com/MHSLongsword',
  enabledLocales: ['hu-HU', 'en-US'],
  defaultLocale: 'hu-HU',
  url: 'https://hosszukardvivas.hu/eredmenyek/ranglista/',
};
