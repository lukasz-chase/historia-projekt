import React from "react";
//styling
import styled from "styled-components";

const HiroshimaPomnik2 = () => {
  return (
    <HiroshimaPage>
      <h2>pomnik 2</h2>
      <div className="text">
        Pomnik Pokoju W Hiroshimie mieszczą się ruiny centrum wystawowego
        zachowane jako pomnik upamiętniający zrzucenie bomb na Hiroshime i
        Nagasaki, należy do Parku Pamięci Pokoju w Hiroshimie. W 1996r. pomnik
        został wpisany na liste światowego dziedzictwa UNESCO. Owy pomnik był
        niegdyś centrum wystawowym zaprojektowanym w celu promocji przemysłu
        prefektury Hiroshima przez czeskiego architekta. Pięciopiętrowy
        secesyjny gmach z charakterystyczna 25-metrową kopułą stanał nad
        brzegiem rzeki Motoyasu w ruchliwej dzielnicy handlowej. Wewnątrz
        wystawiano obiekty związane z przemysłem, prace rzemieślników z różnych
        regionów japonii a także dzieła sztuki. Eksplozja bomby miałą miejsce w
        bezpośredniej bliskości hali. Hipocentrum znajdowało się ok 150m od
        niej. Prawie wszystkie budynki w promieniu dwóch kilometrów od
        hipocentrum zostały zrównane z ziemią. Pomnik Pokoju to jedyny budynek
        który nie uległ całkowitemu zniszczeniu, Wskutek eksplozji zawalila się
        większość ścian, a z kopuły ostał się jej żelazny szkielet.
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

export default HiroshimaPomnik2;
