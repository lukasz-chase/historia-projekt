import React from "react";
//styling
import styled from "styled-components";
//component
import Footer from "../components/Footer";
import Header from "../components/Header";
//img
import sadako from "../images/SadakoTheCultureTrip.com.jpg";
const SadakoSasaki = () => {
  return (
    <>
      <HiroshimaPage>
        <h2>Sadako Sasaki</h2>
        <Header color="black" />
        <div className="text">
          <span>
            Sadako W 1958 roku powstał pomnik Sadako Sasaki, japońskiej
            dziewczynki która w wieku 2 lat przeżyła wybuch bobmy atomowej
            zrzuconej na Hiroshime. Pomnik powstał z funduszy zebranych przez
            przyjaciół dziewczyny jak i wielu innych młodych Japończyków. Owy
            pomnik stoi w parku w Hiroshimie. Jest to ogromny trójnogi postument
            na którym znajduje się rzeźba dziewczynki trzymająca nad głową
            ogromnego żurawia origami. Na owym pomniku widnieje napis: "To jest
            nasz płacz, to jest nasza modlitwa, pokój na świecie". Ludzie
            przynoszą pod pomnik papierowe żurawie które są symbolem szczęścia
            oraz długowieczności.
          </span>
          <div className="images">
            <img src={sadako} alt="sadako sasaki" />
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
    align-items: center;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    span {
      text-align: left;
      line-height: 30px;
      letter-spacing: 5px;
      font-family: "Lato", sans-serif;
    }
    img {
      height: 30rem;
      width: 30rem;
      object-fit: cover;
      @media screen and (max-width: 1000px) {
        height: 25rem;
        width: 20rem;
        padding: 1rem 0;
      }
    }
  }
`;

export default SadakoSasaki;
