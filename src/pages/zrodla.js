import React from "react";
//styled
import styled from "styled-components";
//components
import Header from "../components/Header";
import { zrodlaProjektu } from "../components/sourdeData";

const Zrodla = () => {
  return (
    <ZrodlaComponent>
      <div className="header">Żródła</div>
      <Header color="black" />
      <div className="zrodla">
        {zrodlaProjektu.map((zrodlo) => (
          <span className="zrodlo">{zrodlo.src}</span>
        ))}
      </div>
    </ZrodlaComponent>
  );
};

const ZrodlaComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .zrodla {
    width: 90%;
    font-size: 0.8rem;
    margin: 2rem 0;
    letter-spacing: 3px;
    display: flex;
    flex-direction: column;
    .zrodlo {
      margin-top: 1rem;
    }
  }
`;

export default Zrodla;
