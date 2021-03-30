import React from "react";
//styling
import styled from "styled-components";
//components
import LongPost from "../components/LongPost";
//images
import pokoju from "../images/Statua-Pokoju-w-Nagasaki-Wyspa-Kiusiu.jpg";
import muzeum from "../images/muzeum.pokoju.nagasaki.jpg";
import kwiat from "../images/KwiatMilosciIPokoju.NuclearFutures.org.jpg.jpg";
import Header from "../components/Header";

const Nagasaki = () => {
  return (
    <NagasakiComponent>
      <div className="header">
        <Header color="white" />
      </div>
      <div className="posts">
        <LongPost
          source={pokoju}
          alt="Pomnik pokoju"
          header="Pomnik Pokoju"
          text="Park Pokoju w Nagasaki` Założony w 1955 zlokalizowany w pobliżu
            hipocentrum eksplozji, w parku znajduje się 10-metrowa statuła
            Pokoju."
          link="/nagasaki/pomnik-pokoju"
          imgOrder="1"
          spanOrder="2"
        />
        <LongPost
          source={muzeum}
          alt="muzeum"
          header="Muzeum"
          text="W maju 1949 postanowiono wybudować Muzeum
          Pokoju. W budynku wschodnim znajdują się 3 ekspozycje: Wystawa
          wprowadzająca, Niebezpieczeństwa związane z bronią jądrową i
          Historia Hiroszimy."
          link="/nagasaki/muzeum"
          imgOrder="2"
          spanOrder="1"
        />
        <LongPost
          source={kwiat}
          alt="kwiat zycia i pokoju"
          text="Pomnik Kwiat życia i pokoju Również znany pod nazwą Pomniku Ofiar
            Nagasaki autorstwa Polaka Mariusza Kulpy, replika zrealizowanego
            pomnika Dar Narodu Polskiego odsłoniętego w 1986 roku w Nagasaki,
            upamiętniającego ofiary bomby atomowej z 1945 roku.."
          link="/nagasaki/kwiat-zycia-i-smierci"
          header="Kwiat życia i pokoju"
          imgOrder="1"
          spanOrder="2"
        />
      </div>
    </NagasakiComponent>
  );
};

const NagasakiComponent = styled.div`
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
    width: 80%;
  }
  .header {
    width: 80%;
  }
`;

export default Nagasaki;
