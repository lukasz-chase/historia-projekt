import React from "react";
//styling
import styled from "styled-components";
//images
import pomnikHiroshima1 from "../images/pomnikHiroshima1.jpg";
import pomnikHiroshima2 from "../images/pomnikHiroshima2.jpg";
//components
import Footer from "../components/Footer";

const HiroshimaPomnikPokoju = () => {
  return (
    <HiroshimaPage>
      <h2>Pomnik pokoju</h2>
      <div className="text">
        <span>
          Pomnik Pokoju W Hiroshimie mieszczą się ruiny centrum wystawowego
          zachowane jako pomnik upamiętniający zrzucenie bomb na Hiroshime i
          Nagasaki, należy do Parku Pamięci Pokoju w Hiroshimie. W 1996r. pomnik
          został wpisany na liste światowego dziedzictwa UNESCO. Owy pomnik był
          niegdyś centrum wystawowym zaprojektowanym w celu promocji przemysłu
          prefektury Hiroshima przez czeskiego architekta. Pięciopiętrowy
          secesyjny gmach z charakterystyczna 25-metrową kopułą stanał nad
          brzegiem rzeki Motoyasu w ruchliwej dzielnicy handlowej. Wewnątrz
          wystawiano obiekty związane z przemysłem, prace rzemieślników z
          różnych regionów japonii a także dzieła sztuki. Eksplozja bomby miałą
          miejsce w bezpośredniej bliskości hali. Hipocentrum znajdowało się ok
          150m od niej. Prawie wszystkie budynki w promieniu dwóch kilometrów od
          hipocentrum zostały zrównane z ziemią. Pomnik Pokoju to jedyny budynek
          który nie uległ całkowitemu zniszczeniu, Wskutek eksplozji zawalila
          się większość ścian, a z kopuły ostał się jej żelazny szkielet.
        </span>
        <div className="images">
          <img src={pomnikHiroshima1} alt="pomnikHiroshima1" />
          <img src={pomnikHiroshima2} alt="pomnikHiroshima2" />
        </div>
      </div>
      <Footer
        zrodlo={
          "https://pl.wikipedia.org/wiki/Muzeum_Pokoju_w_Hiroszimie?fbclid=IwAR0Tzw4qH3Jf5nSDLx4Va0yHnsbOQVGg0n5guH7w__B6RZsa0sUvT2LEKxg"
        }
        zrodlo2={
          "https://pl.wikipedia.org/wiki/Muzeum_Pokoju_w_Hiroszimie?fbclid=IwAR3CavrETdRBHadLABcQSy-Ove_tOYYQa0bA6nRjtMweBEM8umTcwB4IPqY"
        }
      />
    </HiroshimaPage>
  );
};

const HiroshimaPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  text-align: center;
  min-height: 100%;
  h2 {
    padding: 1rem 0;
    text-transform: upperCase;
  }
  .text {
    width: 90%;
    padding: 1rem 0;
    display: flex;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    span {
      padding: 1rem;
      text-align: left;
      font-family: "Lato", sans-serif;
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
    .images {
      img {
        height: 20rem;
        width: 30rem;
        @media screen and (max-width: 1000px) {
          height: 10rem;
          width: 20rem;
        }
      }
    }
  }
`;

export default HiroshimaPomnikPokoju;
