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
        <a href="mailto:zegkljan{'@'}gmail.com">zegkljan{'@'}gmail.com</a>
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
