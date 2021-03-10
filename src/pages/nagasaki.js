import React from "react";
//styled
import styled from "styled-components";
//components
import ImageBeforeAndAfter from "../components/ImageBeforeAndAfter";
//images
import nagasakiBefore from "../images/nagasakiBefore.jpg";
import nagasakiAfter from "../images/nagasakiAfter.jpg";

const nagasaki = () => {
  return (
    <NagasakiPage>
      <h1>Nagasaki before and after</h1>
      <ImageBeforeAndAfter before={nagasakiBefore} after={nagasakiAfter} />
    </NagasakiPage>
  );
};

const NagasakiPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  text-align: center;
`;

export default nagasaki;
