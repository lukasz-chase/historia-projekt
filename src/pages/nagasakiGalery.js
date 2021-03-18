import React from "react";
//styling
import styled from "styled-components";
//components
import ImageBeforeAndAfter from "../components/ImageBeforeAndAfter";
//images
import nagasakiBefore from "../images/nagasakiBefore.jpg";
import nagasakiAfter from "../images/nagasakiAfter.jpg";

const About = () => {
  return (
    <AboutComponent>
      <h1>Nagasaki before and after</h1>
      <ImageBeforeAndAfter before={nagasakiBefore} after={nagasakiAfter} />
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
