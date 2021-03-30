import React from "react";
//styled
import styled from "styled-components";
//components
import Header from "../components/Header";
import Person from "../components/Person";
//images
import lukasz from "../images/lukaszScigaj.jpg";
import ernest from "../images/ernestCebula.jpg";
import bartek from "../images/bartekPiechowicz.jpg";
import mateusz from "../images/mateuszOgieglo.png";
import marcel from "../images/marcelWojcik.jpg";

const Projekt = () => {
  return (
    <About>
      <div className="header">O projekcie</div>
      <Header color="black" />
      <div className="text">
        Strona jest poświęcona rodzają pamięci ataku na Hiroshimę i Nagasaki.
        Przedstawia ona zdjęcia i opisy miejsc ważnych dla tych tragedii.
        Projekt został stworzony aby pamiętać strasznych wydarzeniach. Ciężką
        pracą na tej stronie zostały zgromadzone miejsca oraz zdjęcia, które
        można zobaczyć i dowiedzieć się więcej o nich.
      </div>
      <h1>Twórcy</h1>
      <div className="creators">
        <Person zdjecie={lukasz} nazwa="lukasz" godnosc="Łukasz Ścigaj" />
        <Person zdjecie={mateusz} nazwa="mateusz" godnosc="Mateusz Ogiegło" />
        <Person zdjecie={ernest} nazwa="ernest" godnosc="Ernest Cebula" />
      </div>
      <div className="creators">
        <Person zdjecie={bartek} nazwa="bartek" godnosc="Bartosz Piechowicz" />
        <Person zdjecie={marcel} nazwa="marcel" godnosc="Marcel Wójcik" />
      </div>
    </About>
  );
};

const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gainsboro;
  .header {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  .text {
    width: 90%;
    font-size: 2rem;
    margin: 2rem 0;
    letter-spacing: 3px;
    line-height: 60px;
  }
  .creators {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export default Projekt;
