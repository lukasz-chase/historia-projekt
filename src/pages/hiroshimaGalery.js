import React from "react";
//styling
import styled from "styled-components";
//components
import ImageBeforeAndAfter from "../components/ImageBeforeAndAfter";
//images
import hiroshimaBefore from "../images/hiroshimaBefore.JPG";
import hiroshimaAfter from "../images/hiroshimaAfter.JPG";

const About = () => {
  return (
    <AboutComponent>
      <h1>Hiroshima before and after</h1>
      <ImageBeforeAndAfter before={hiroshimaBefore} after={hiroshimaAfter} />
    </AboutComponent>
  );
};

const AboutComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  text-align: center;
`;

export default About;
