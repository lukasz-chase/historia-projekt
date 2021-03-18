import React from "react";
//styling
import styled from "styled-components";

const HiroshimaPomnik1 = () => {
  return (
    <HiroshimaPage>
      <h2>pomnik 1</h2>
      <div className="text">
        Sadako W 1958 roku powstał pomnik Sadako Sasaki, japońskiej dziewczynki
        która w wieku 2 lat przeżyła wybuch bobmy atomowej zrzuconej na
        Hiroshime. Pomnik powstał z funduszy zebranych przez przyjaciół
        dziewczyny jak i wielu innych młodych Japończyków. Owy pomnik stoi w
        parku w Hiroshimie. Jest to ogromny trójnogi postument na którym
        znajduje się rzeźba dziewczynki trzymająca nad głową ogromnego żurawia
        origami. Na owym pomniku widnieje napis: "To jest nasz płacz, to jest
        nasza modlitwa, pokój na świecie". Ludzie przynoszą pod pomnik papierowe
        żurawie które są symbolem szczęścia oraz długowieczności.
      </div>
    </HiroshimaPage>
  );
};

const HiroshimaPage = styled.div`
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

export default HiroshimaPomnik1;
