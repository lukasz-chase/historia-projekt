import React from "react";
//styled
import styled from "styled-components";
//images
import kwiat from "../images/KwiatMilosciIPokoju.NuclearFutures.org.jpg.jpg";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";

const KwiatZycia = () => {
  return (
    <>
      <NagasakiPage>
        <h2>Kwiat życia i pokoju</h2>
        <Header color="black" />
        <div className="text">
          <span>
            Replika została odsłonięta 9 VIII 1988 roku na skwerze między
            ulicami Szeroką i Św Ducha, przedstawia metalową rzeźbę o wysokości
            2m, w formie skamieniałych liści symbolizujących zagłądę oraz
            wyrastającym nowym kwiatem symbolem życia i odrodzenia. Początkowo
            przeznaczony do Warszawy, ostatecznie stanął w Gdańku, portowym
            mieście, w którym 2WŚ się rozpoczełą, zakończyła się natomiast w
            Nagasaki, innym portowym mieście.
          </span>
          <div className="image">
            <img src={kwiat} alt="kwiat milosci i pokoju" />
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
    width: 70%;
    padding: 1rem 0;
    font-size: 1.5rem;
    display: flex;
    line-height: 40px;
    @media screen and (max-width: 1000px) {
      width: 95%;
      flex-direction: column;
      padding: 0;
    }
    span {
      font-family: "Lato", sans-serif;
      letter-spacing: 3px;
      text-align: left;
      padding: 1rem;
    }
    .image {
      img {
        height: 30rem;
        width: 20rem;
        object-fit: cover;
      }
    }
  }
`;

export default KwiatZycia;
