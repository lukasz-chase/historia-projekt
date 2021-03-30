import React from "react";
//styled
import styled from "styled-components";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
//images
import statua from "../images/Statua-Pokoju-w-Nagasaki-Wyspa-Kiusiu.jpg";

const NagasakiPomnikPokoju = () => {
  return (
    <>
      <NagasakiPage>
        <h2>Statuła pokoju</h2>
        <Header color="black" />
        <div className="text">
          <span>
            Park Pokoju w Nagasaki` Założony w 1955 zlokalizowany w pobliżu
            hipocentrum eksplozji, w parku znajduje się 10-metrowa statuła
            Pokoju. W prawej ręce mierzy w zagrożenie bronią jądrową a lewą ręką
            w niekończący się pokój. Łagodna twarz symbolizująca łaskę a
            delikatnie zamknięte oczy modlą sięza spokój dusz ofiar bomby.
            Zgięta prawa noga i wyprostowana lewa noga oznaczają zarówno
            medytację, jak i inicjatywę, aby powstać i uratować ludzi na całym
            świecie. Co roku 9 Sierpnia, obchodzona jest rocznica bombardowania,
            przed pomnikiem odbywa się ceremonia upamiętniająca a burmistrz
            Nagasaki przekazuje światu deklaracje pokoju. W 1978 Nagasaki
            stworzyło Strefe Symboli Pokoju po dwóch stronach parku i zaprosili
            kraje z całęgo świata do dorzucenia swoich symboli. Takich jak:
            Relief of Friendship z Porto, Portugali/Joy of Life z
            Czechosłowacji/A Call z Bługarii/Flower of Love and Peace z Polski i
            wiele innych.
          </span>
          <div className="image">
            <img src={statua} alt="statua pokoju" />
          </div>
        </div>
      </NagasakiPage>
      <Footer />
    </>
  );
};

const NagasakiPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  text-align: center;
  min-height: 96vh;
  background-color: gainsboro;
  h2 {
    padding: 1rem 0;
    text-transform: upperCase;
  }
  .text {
    width: 90%;
    padding: 1rem 0;
    font-family: "Lato", sans-serif;
    font-size: 1.5rem;
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
    .image {
      img {
        height: 20rem;
        width: 30rem;
        @media screen and (max-width: 1000px) {
          height: 15rem;
          width: 20rem;
        }
      }
    }
  }
`;

export default NagasakiPomnikPokoju;
