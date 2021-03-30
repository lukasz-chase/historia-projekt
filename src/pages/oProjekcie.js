import React from "react";
//styled
import styled from "styled-components";
//components
import Header from "../components/Header";

const Projekt = () => {
  return (
    <About>
      <div className="header">O projekcie</div>
      <Header color="black" />
      <div className="text">
        Strona jest poświęcona rodzają pamięci ataku na Hiroshimę i Nagasaki.
        Przedstawia ona zdjęcia i opisy miejsc ważnych dla tych tragedii.
        Historia to nie tylko wielkie wydarzenia, dotykające całe społeczeństwo.
        Ciężką pracą na tej stronie zostały zgromadzone miejsca oraz zdjęcia,
        które można zobaczyć i dowiedzieć się więcej o nich.
      </div>
    </About>
  );
};

const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
`;

export default Projekt;
