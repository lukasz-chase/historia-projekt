import React from "react";
//styling
import styled from "styled-components";
//images
import barefoot from "../images/BareFootGenWikipedia.jpg";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Upamietnienie = () => {
  return (
    <>
      <Component>
        <div className="header">Upamiętnienie</div>
        <Header color="black" />
        <div className="text">
          <span>
            Po 2 Wojnie Światowej w celach upamiętnienia wydarzeń które
            wstrząsły całą Japonią. Wiele osób które przeżyły owe wydarzenia
            postanowiły przekazywać swoje historię i przeżycia dalej dzięki
            czemu rozbiegły się one na cały świat, dzięki takiemu przebiegu
            historii powstały dzieła kultury które miały pokazać wszystkim
            ludziom co naprawdę wydarzyło się w Hiroshimie i Nagasaki.
            Japończycy postarali się, żeby powstały dzieła które będą trafiać
            jak i do najmłodszego odbiorcy i również do osób starszych. W 1973r.
            22 Maja powstała seria komiksów w Japonii zwanych mangami o nazwie
            Barefoot Gen jest to opowieść biograficzna o tym jak Gen Nakaoka
            przetrwał atak bombowy oraz ukazuje jak próbowali przeżyć w skażonym
            obszarze po wybuchu. Na podstawie owej mangi powstało 10 książek, 3
            filmy oraz 2 filmy animowane. W 1996r. 1-szego Toshi Yonezawa wydał
            książkę Hiroshima Notes jest to książka w której zapisane są
            historie ocalałych wybuch w Hiroshimie Książka odniosła wielki
            sukces poprzez ukazanie przejmującego portretu spustoszonego miasta
            oraz ludzkiej twarzy pośród nuklearnej zagłady. W 1952 roku powstał
            film Dzieci Hiroshimy opowiadający o losach ludzi napromieniowanych
            w wyniku zrzucenia na Hiroszimę przez Amerykanów bomby atomowej,
            Nauczycielka która powraca do miasta w gorzki sposób dowiaduje się
            jak promieniowanie wpłyneło na życie ocalałych.
          </span>
          <img src={barefoot} alt="bare foot" />
        </div>
        <div className="images"></div>
      </Component>
      <Footer />
    </>
  );
};

const Component = styled.div`
  background-color: gainsboro;
  min-height: 96vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header {
    font-size: 2rem;
    font-weight: bold;
  }
  .text {
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    span {
      font-family: "Lato", sans-serif;
      line-height: 30px;
    }
    img {
      padding: 1rem;
    }
  }
`;

export default Upamietnienie;
