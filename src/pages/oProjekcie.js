import React from "react";
//styling
import styled from "styled-components";
const Projekt = () => {
  return (
    <AboutComponent>
      <span>
        Strona jest poświęcona rodzają pamięci ataku na Hiroshimę i Nagasaki.
        Przedstawia ona zdjęcia i opisy miejsc ważnych dla tych tragedii.
        Historia to nie tylko wielkie wydarzenia, dotykające całe społeczeństwo.
        Ciężką pracą na tej stronie zostały zgromadzone miejsca oraz zdjęcia,
        które można zobaczyć i dowiedzieć się więcej o nich.
      </span>
    </AboutComponent>
  );
};

const AboutComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  span {
    color: black;
    text-align: center;
    width: 50%;
    font-size: 2rem;
    b {
      text-decoration: underline;
    }
    @media screen and (max-width: 1000px) {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

export default Projekt;
