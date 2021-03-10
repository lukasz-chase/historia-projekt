import React from "react";
//styling
import styled from "styled-components";
import ImageBeforeAndAfter from "../components/ImageBeforeAndAfter";
//images
import hiroshimaBefore from "../images/hiroshimaBefore.JPG";
import hiroshimaAfter from "../images/hiroshimaAfter.JPG";
const hiroshima = () => {
  return (
    <HiroshimaPage>
      <h1>Nagasaki before and after</h1>
      <ImageBeforeAndAfter before={hiroshimaBefore} after={hiroshimaAfter} />
    </HiroshimaPage>
  );
};

const HiroshimaPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
`;

export default hiroshima;
