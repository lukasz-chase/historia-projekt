import React from "react";
//styling
import styled from "styled-components";
import Footer from "../components/Footer";
//images
import bomb from "../images/fat man bomb.jpg";
import poWybuchu from "../images/nagasaki po wybuchu.jpg";
import pudelko from "../images/pudełko ze zwęglonym jedzeniem.jpg";
import wybuch from "../images/wybuch momby.jpg";
import zegar from "../images/zegar zatrzymany w chwili wybuchu.jpg";
//components
import Header from "../components/Header";

const NagasakiMuzeum = () => {
  return (
    <>
      <HiroshimaPage>
        <h2>
          Muzeum historyczne w Nagasaki w Japonii, poświęcone atakowi atomowemu
          na to miasto.
        </h2>
        <Header color="black" />
        <div className="text">
          Obok muzeum znajduje się Narodowa Sala Pamięci Pokoju Ofiar Bomby
          Atomowej w Nagasaki, zbudowana w 2003. Pierwotnie zbiory były od 1955
          eksponowane w Międzynarodowym Domu Kultury, a od kwietnia 1996 Muzeum
          posiada własną siedzibę, w której znajdują się eksponaty, związane z
          historią powstania broni atomowej oraz z atakiem jądrowym na Nagasaki
          i jego skutkami. Kiedy bomba została zrzucona 9 sierpnia 1945 o
          godzinie 11:02:35, 20 dzielnic w promieniu jednego kilometra od
          epicentrum zniszczyła wysoka temperatura i fala uderzeniowa wybuchu
          jądrowego. Dzieła zniszczenia dopełniły pożary. Zginęło co najmniej 70
          tysięcy osób. Muzeum pokazuje, jak wyglądało miasto przed
          zniszczeniem. Zbiory obrazują skutki bombardowania; jest tu replika
          zniszczonej wybuchem frontowej ściany Katedry Urakami, która
          znajdowała się 500 m od epicentrum wybuchu. Są tu także liczne spalone
          różańce- jedyna pamiątka po kilkudziesięciu osobach, które zginęły
          wówczas w katedrze. Znajdują się tu także ulotki amerykańskie zrzucone
          nad miastem przed wybuchem, ostrzegające przed skutkami ataku i
          wzywające mieszkańców do opuszczenia miasta. W zbiorach znajdują się
          również stopione temperaturą wybuchu butelki, kości ludzkiej dłoni
          przyklejone do kawałka stopionego szkła, spalone ubranie, pudełko na
          drugie śniadanie ze zwęgloną zawartością oraz hełm z resztkami czaszki
          ofiary na wewnętrznej powierzchni. Jest tu także model bomby Fat Man.
          Muzeum przedstawia szkody spowodowane przez promieniowanie i wybuch,
          apele ocalonych, a także przeprowadzone działania ratownicze i
          pomocowe.
        </div>
        <div className="images">
          <div className="image">
            <span>Fat man bomb</span>
            <img src={bomb} alt="fat man bomb" />
          </div>
          <div className="image">
            <span>Nagasaki po wybuchu</span>
            <img src={poWybuchu} alt="Nagasaki po wybuchu" />
          </div>
          <div className="image">
            <span>Pudełko ze zwęglonym jedzeniem</span>
            <img src={pudelko} alt="Pudełko ze zwęglonym jedzeniem" />
          </div>
          <div className="image">
            <span>Wybuch bomby</span>
            <img src={wybuch} alt="Wybuch bomby" />
          </div>
          <div className="image">
            <span>Zegar zatrzymany w chwili wybuchu</span>
            <img src={zegar} alt="zegar zatrzymany w chwili wybuchu" />
          </div>
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
  text-align: center;
  background-color: gainsboro;
  h2 {
    width: 70%;
    padding: 1rem 0;
    text-transform: upperCase;
  }
  .text {
    width: 70%;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 1rem 0;
    font-size: 1rem;
    font-family: "Lato", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
  .images {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 4rem;
    .image {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      span {
        padding: 1rem;
        text-align: center;
      }
      img {
        height: 20rem;
        width: 30rem;
        object-fit: cover;
        @media screen and (max-width: 1000px) {
          height: 10rem;
          width: 20rem;
        }
      }
    }
  }
`;

export default NagasakiMuzeum;
