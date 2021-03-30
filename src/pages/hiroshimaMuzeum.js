import React from "react";
//styling
import styled from "styled-components";
//images
import gmach from "../images/Gmach główny muzeum.jpg";
import makieta from "../images/makieta zniszczonego miasta.jpg";
import ludzie from "../images/zdjęcia cieni ludzi którzy zgineli podczas wybuchu.jpg";
import ruiny from "../images/ruiny miasta.jpg";
//components
import Footer from "../components/Footer";
import Header from "../components/Header";

const HiroshimaMuzeum = () => {
  return (
    <>
      <HiroshimaPage>
        <h2>
          Muzeum historyczne w Hiroszimie w Japonii, poświęcone atakowi
          atomowemu na to miasto.
        </h2>
        <Header color="black" />
        <div className="text">
          Hiroszima była pierwszym miastem na świecie, które zniszczyła bomba
          atomowa Little Boy, wybuchając na wysokości ok. 600 m nad centrum
          miasta 6 sierpnia 1945. W maju 1949 postanowiono wybudować Muzeum
          Pokoju. W budynku wschodnim znajdują się 3 ekspozycje: "Wystawa
          wprowadzająca", "Niebezpieczeństwa związane z bronią jądrową" i
          "Historia Hiroszimy". W gmachu głównym wystawa "Realia bombardowania
          atomowego" składa się z dwóch działów: "Zniszczenia 6 sierpnia" oraz
          "Ofiary i ocaleni". Wystawy są rozmieszczone chronologicznie: początek
          to historia miasta i jego militaryzacja podczas ostatniej wojny.
          Następnie przedstawiony jest rozwój broni jądrowej w USA. Potem
          następuje prezentacja wybuchu atomowego i jego skutków bezpośrednich
          oraz długotrwałych. Ekspozycja obejmuje m.in. zdjęcia urazów ofiar
          wybuchu, ruin zniszczonego miasta, przedmioty stopione wysoką
          temperaturą, spalone ubrania itp. Prezentowany jest też współczesny
          stan zbrojeń atomowych i związane z tym zagrożenia.
          <div className="image-within">
            <span>Gmach główny muzemu</span>
            <img src={gmach} alt="gmach glowny muzeum" />
          </div>
        </div>
        <div className="images">
          <div className="image">
            <span>Makieta zniszczonego miasta</span>
            <img src={makieta} alt="makieta zniszczonego miasta" />
          </div>
          <div className="image">
            <span>Zdjęcia cieni ludzi którzy zgineli podczas wybuchu</span>
            <img
              src={ludzie}
              alt="zdjęcia cieni ludzi którzy zgineli podczas wybuchu"
            />
          </div>
          <div className="image">
            <span>Ruiny miasta</span>
            <img src={ruiny} alt="ruiny miasta" />
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
    padding: 1rem 0;
    text-transform: upperCase;
  }
  .text {
    width: 90%;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 1rem 0;
    font-size: 1rem;
    font-family: "Lato", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 4px;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      width: 95%;
    }
  }
  .images {
    display: flex;
    margin-top: 4rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
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
  .image-within {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5rem;
    @media screen and (max-width: 1000px) {
      margin: 0;
    }
    span {
      text-align: center;
      padding: 1rem;
    }
    img {
      height: 25rem;
      width: 35rem;
      object-fit: cover;
      @media screen and (max-width: 1000px) {
        height: 10rem;
        width: 20rem;
      }
    }
  }
`;

export default HiroshimaMuzeum;
