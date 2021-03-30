import React from "react";
//styling
import styled from "styled-components";
//components
import LongPost from "../components/LongPost";
//images
import pokoju from "../images/pomnikHiroshima1.jpg";
import muzeum from "../images/Muzeum.Pokoju.Hiroszima.PulsAzji.pl.jpg";
import sadako from "../images/SadakoTheCultureTrip.com.jpg";
import Header from "../components/Header";

const Hiroshima = () => {
  return (
    <HiroshimaComponent>
      <div className="header">
        <Header color="white" />
      </div>
      <div className="posts">
        <LongPost
          source={muzeum}
          alt="muzeum"
          header="Muzeum"
          text="W maju 1949 postanowiono wybudować Muzeum
          Pokoju. W budynku wschodnim znajdują się 3 ekspozycje: Wystawa
          wprowadzająca, Niebezpieczeństwa związane z bronią jądrową i
          Historia Hiroszimy."
          link="/hiroshima/muzeum"
          imgOrder="1"
          spanOrder="2"
        />
        <LongPost
          source={pokoju}
          alt="Pomnik pokoju"
          header="Pomnik Pokoju"
          text="W Hiroshimie mieszczą się ruiny centrum wystawowego
            zachowane jako pomnik upamiętniający zrzucenie bomb na Hiroshime i
            Nagasaki, należy do Parku Pamięci Pokoju w Hiroshimie"
          link="/hiroshima/pomnik-pokoju"
          imgOrder="2"
          spanOrder="1"
        />
        <LongPost
          source={sadako}
          alt="sadako"
          text="W 1958 roku powstał pomnik Sadako Sasaki, japońskiej
          dziewczynki która w wieku 2 lat przeżyła wybuch bobmy atomowej
          zrzuconej na Hiroshime."
          link="/hiroshima/sadako-sasaki"
          header="Sadako sasaki"
          imgOrder="1"
          spanOrder="2"
        />
      </div>
    </HiroshimaComponent>
  );
};

const HiroshimaComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 2rem;
  .posts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export default Hiroshima;
