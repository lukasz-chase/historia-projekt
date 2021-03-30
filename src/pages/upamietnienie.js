import React from "react";
//styling
import styled from "styled-components";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageBeforeAndAfter from "../components/ImageBeforeAndAfter";
import Book from "../components/Book";
import LongPost from "../components/LongPost";
//images
import barefoot from "../images/BareFootGenWikipedia.jpg";
import hiroshimaBefore from "../images/hiroshimaBefore.JPG";
import hiroshimaAfter from "../images/hiroshimaAfter.JPG";
import nagasakiBefore from "../images/nagasakiBefore.jpg";
import nagasakiAfter from "../images/nagasakiAfter.jpg";
import ksiazkaHiroshima from "../images/ksiazkaHiroshima.jpg";
import dziennikHiroshima from "../images/dziennikHiroshima.jpg";
import smiercHiroshima from "../images/smiercHiroshima.jpg";

const Upamietnienie = () => {
  return (
    <>
      <Component>
        <div className="header">Upamiętnienie</div>
        <Header color="black" />
        <div className="text">
          <span>
            Po 2 Wojnie Światowej w celach upamiętnienia wydarzeń które
            wstrząsły całą Japonią. Wiele osób które przeżyły owe wydarzenia
            postanowiły przekazywać swoje historię i przeżycia dalej dzięki
            czemu rozbiegły się one na cały świat, dzięki takiemu przebiegu
            historii powstały dzieła kultury które miały pokazać wszystkim
            ludziom co naprawdę wydarzyło się w Hiroshimie i Nagasaki.
            Japończycy postarali się, żeby powstały dzieła które będą trafiać
            jak i do najmłodszego odbiorcy i również do osób starszych. W 1973r.
            22 Maja powstała seria komiksów w Japonii zwanych mangami o nazwie
            Barefoot Gen jest to opowieść biograficzna o tym jak Gen Nakaoka
            przetrwał atak bombowy oraz ukazuje jak próbowali przeżyć w skażonym
            obszarze po wybuchu. Na podstawie owej mangi powstało 10 książek, 3
            filmy oraz 2 filmy animowane. W 1996r. 1-szego Toshi Yonezawa wydał
            książkę Hiroshima Notes jest to książka w której zapisane są
            historie ocalałych wybuch w Hiroshimie Książka odniosła wielki
            sukces poprzez ukazanie przejmującego portretu spustoszonego miasta
            oraz ludzkiej twarzy pośród nuklearnej zagłady. W 1952 roku powstał
            film Dzieci Hiroshimy opowiadający o losach ludzi napromieniowanych
            w wyniku zrzucenia na Hiroszimę przez Amerykanów bomby atomowej,
            Nauczycielka która powraca do miasta w gorzki sposób dowiaduje się
            jak promieniowanie wpłyneło na życie ocalałych.
          </span>
          <img src={barefoot} alt="bare foot" />
        </div>
        <h2 className="info">
          Tragedia w Hiroshimie i Nagasaki przyczyniła się do światowego
          rozprzestrzenienia owej tragedii na wiele dzieł kultury, lecz nie
          zaprzeczalnie na ich czele królują książki, a jest ich całkiem sporo
          pisanych przez Japończyków jak i ludzi z innych krai
        </h2>
        <div className="books">
          <LongPost
            source={ksiazkaHiroshima}
            alt="hiroshima"
            text="Rok po ataku John Hersey udał się do Japonii, do strefy zrzutu
            bomby, i stworzył do granic bólu żywy obraz zagłady, której
            doświadczyli mieszkańcy Hiroszimy. Oparł się na wstrząsających
            opowieściach sześciorga osób, którzy makabryczne szczegóły eksplozji
            będą pamiętać już zawsze. Choć cudem przeżyli ten koszmar, to trudno
            ocenić, czy był to dar, czy przekleństwo."
            link={false}
            header="John Hersey `Hiroshima`"
            imgOrder="1"
            spanOrder="2"
          />
          <LongPost
            source={dziennikHiroshima}
            alt="hiroshima"
            text="Owy dziennik został napisany 2 miesiące po wybuchu bomb atomowych przez dr. Michihiko. Opisuje w nim ona swoje przeżycia i powolny powrót do normalności w Hiroshimie oraz przeżycia jak i śmierci wielu pacjentów w jej szpitalu."
            link={false}
            header="Michihiko Hachiya Hiroshima `Diary: The Journal of a Japanese Physician`"
            imgOrder="2"
            spanOrder="1"
          />
          <LongPost
            source={smiercHiroshima}
            alt="hiroshima"
            text="W Japonii hibakusha oznacza ludzie pod wpływem eksplozji, zwłaszcza podczas eksplozji w 1945 w Hiroshimie. To opracowanie pokazuje psychologiczne strony 90 tyś ocaleńców"
            link={false}
            header="Robert Jay Lifton
           `Death in Life: Survivors of Hiroshima`"
            imgOrder="1"
            spanOrder="2"
          />
        </div>
        <h2 className="info">
          Na podstawie tych wydarzeń oraz opisów książkowych możemy znaleźć
          również dużo filmów o owej tematyce jak np:
        </h2>
        <div className="movies">
          <Book
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Barefoot_Gen_1977_DVD_cover.jpg/220px-Barefoot_Gen_1977_DVD_cover.jpg"
            title="Barefoot Gen: Explosion of Tears"
            alt="Barefoot Gen: Explosion of Tears"
          />
          <Book
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/The_Bells_of_Nagasaki_film.jpg/220px-The_Bells_of_Nagasaki_film.jpg"
            title="The Bells of Nagasaki"
            alt="The Bells of Nagasaki"
          />
          <Book
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Genbaku_no_ko_3.jpg/220px-Genbaku_no_ko_3.jpg"
            title="Children of Hiroshima"
            alt="Children of Hiroshima"
          />
          <Book
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Hibakusha_Theatrical_Poster.jpg/220px-Hibakusha_Theatrical_Poster.jpg"
            title="Hibakusha"
            alt="Hibakusha"
          />
          <Book
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/HiroshimaFilm.jpg/220px-HiroshimaFilm.jpg"
            title="Hiroshima"
            alt="Hiroshima"
          />
          <Book
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Fat_man_and_little_boy.jpg/220px-Fat_man_and_little_boy.jpg"
            title="Fat Man and Little Boy"
            alt="Fat Man and Little Boy"
          />
        </div>
        <div className="beforeAndAfter">
          <div className="hiroshima">
            <h1>Hiroshima przed i po</h1>
            <ImageBeforeAndAfter
              before={hiroshimaBefore}
              after={hiroshimaAfter}
            />
          </div>
          <div className="nagasaki">
            <h1>Nagasaki przed i po</h1>
            <ImageBeforeAndAfter
              before={nagasakiBefore}
              after={nagasakiAfter}
            />
          </div>
        </div>
      </Component>
      <Footer />
    </>
  );
};

const Component = styled.div`
  background-color: gainsboro;
  min-height: 96vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 3px;
  line-height: 40px;
  .header {
    font-size: 2rem;
    font-weight: bold;
  }
  .text {
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    span {
      font-family: "Lato", sans-serif;
    }
    img {
      padding: 1rem;
    }
  }
  h2 {
    width: 90%;
    padding: 1rem;
  }
  .beforeAndAfter {
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    .hiroshima,
    .nagasaki {
      margin: 0 3rem;
    }
  }
  .books {
    width: 90%;
  }
  .movies {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default Upamietnienie;
