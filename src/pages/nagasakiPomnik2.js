import React from "react";
//styled
import styled from "styled-components";

const NagasakiPomnik2 = () => {
  return (
    <NagasakiPage>
      <h2>pomnik2</h2>
      <div className="text">
        Park Pokoju w Nagasaki` Założony w 1955 zlokalizowany w pobliżu
        hipocentrum eksplozji, w parku znajduje się 10-metrowa statuła Pokoju. W
        prawej ręce mierzy w zagrożenie bronią jądrową a lewą ręką w niekończący
        się pokój. Łagodna twarz symbolizująca łaskę a delikatnie zamknięte oczy
        modlą sięza spokój dusz ofiar bomby. Zgięta prawa noga i wyprostowana
        lewa noga oznaczają zarówno medytację, jak i inicjatywę, aby powstać i
        uratować ludzi na całym świecie. Co roku 9 Sierpnia, obchodzona jest
        rocznica bombardowania, przed pomnikiem odbywa się ceremonia
        upamiętniająca a burmistrz Nagasaki przekazuje światu deklaracje pokoju.
        W 1978 Nagasaki stworzyło Strefe Symboli Pokoju po dwóch stronach parku
        i zaprosili kraje z całęgo świata do dorzucenia swoich symboli. Takich
        jak: Relief of Friendship z Porto, Portugali/Joy of Life z
        Czechosłowacji/A Call z Bługarii/Flower of Love and Peace z Polski i
        wiele innych. https://en.wikipedia.org/wiki/Nagasaki_Peace_Park
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

export default NagasakiPomnik2;
