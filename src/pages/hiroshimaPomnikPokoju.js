import React from "react";
//styling
import styled from "styled-components";
//images
import pomnikHiroshima1 from "../images/pomnikHiroshima1.jpg";
import pomnikHiroshima2 from "../images/pomnikHiroshima2.jpg";
//components
import Footer from "../components/Footer";
import Header from "../components/Header";

const HiroshimaPomnikPokoju = () => {
  return (
    <>
      <HiroshimaPage>
        <h2>Pomnik pokoju</h2>
        <div className="header">
          <Header color="black" />
        </div>
        <div className="text">
          <span>
            Pomnik Pokoju W Hiroshimie mieszczą się ruiny centrum wystawowego
            zachowane jako pomnik upamiętniający zrzucenie bomb na Hiroshime i
            Nagasaki, należy do Parku Pamięci Pokoju w Hiroshimie. W 1996r.
            pomnik został wpisany na liste światowego dziedzictwa UNESCO. Owy
            pomnik był niegdyś centrum wystawowym zaprojektowanym w celu
            promocji przemysłu prefektury Hiroshima przez czeskiego architekta.
            Pięciopiętrowy secesyjny gmach z charakterystyczna 25-metrową kopułą
            stanał nad brzegiem rzeki Motoyasu w ruchliwej dzielnicy handlowej.
          </span>
          <img src={pomnikHiroshima1} alt="pomnikHiroshima1" />
        </div>
        <div className="text2">
          <span>
            Wewnątrz wystawiano obiekty związane z przemysłem, prace
            rzemieślników z różnych regionów japonii a także dzieła sztuki.
            Eksplozja bomby miałą miejsce w bezpośredniej bliskości hali.
            Hipocentrum znajdowało się ok 150m od niej. Prawie wszystkie budynki
            w promieniu dwóch kilometrów od hipocentrum zostały zrównane z
            ziemią. Pomnik Pokoju to jedyny budynek który nie uległ całkowitemu
            zniszczeniu, Wskutek eksplozji zawalila się większość ścian, a z
            kopuły ostał się jej żelazny szkielet.
          </span>
          <img src={pomnikHiroshima2} alt="pomnikHiroshima2" />
        </div>
      </HiroshimaPage>
      <Footer />
    </>
  );
};

const HiroshimaPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  min-height: 96vh;
  background-color: gainsboro;
  h2 {
    padding: 1rem 0;
    text-transform: upperCase;
  }
  .header {
    width: 90%;
  }
  .text,
  .text2 {
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
      font-size: 1.3rem;
      letter-spacing: 3px;
      order: 2;
      line-height: 30px;
    }
    img {
      order: 1;
      height: 12rem;
      width: 7rem;
      object-fit: cover;
      border: 1px solid black;
    }
  }
  .text2 {
    img {
      order: 2;
    }
    span {
      order: 1;
    }
  }
`;

export default HiroshimaPomnikPokoju;
