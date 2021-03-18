import React from "react";
//styled
import styled from "styled-components";

const NagasakiPomnik1 = () => {
  return (
    <NagasakiPage>
      <h2>pomnik1</h2>
      <div className="text">
        Pomnik "Kwiat życia i pokoju" Również znany pod nazwą Pomniku Ofiar
        Nagasaki autorstwa Polaka Mariusza Kulpy, replika zrealizowanego pomnika
        Dar Narodu Polskiego odsłoniętego w 1986 roku w Nagasaki,
        upamiętniającego ofiary bomby atomowej z 1945 roku. Replika została
        odsłonięta 9 VIII 1988 roku na skwerze między ulicami Szeroką i Św
        Ducha, przedstawia metalową rzeźbę o wysokości 2m, w formie
        skamieniałych liści symbolizujących zagłądę oraz wyrastającym nowym
        kwiatem symbolem życia i odrodzenia. Początkowo przeznaczony do
        Warszawy, ostatecznie stanął w Gdańku, portowym mieście, w którym 2WŚ
        się rozpoczełą, zakończyła się natomiast w Nagasaki, innym portowym
        mieście.
      </div>
    </NagasakiPage>
  );
};

const NagasakiPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  text-align: center;
  h2 {
    padding: 1rem 0;
    text-transform: upperCase;
  }
  .text {
    width: 90%;
    padding: 1rem 0;
  }
`;

export default NagasakiPomnik1;
