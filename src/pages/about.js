import React from "react";
//styling
import styled from "styled-components";
const About = () => {
  return (
    <AboutComponent>
      <span>
        This is a project, memorizing terrible things that happened during WWII
        in Nagasaki and Hiroshima, it was created by <b>Łukasz Ścigaj</b>,{" "}
        <b>Mateusz Ogiegło</b>, <b>Bartosz Piechowicz</b>, <b>Marcel Wójcik</b>{" "}
        and <b>Ernest Cebula</b>.
      </span>
    </AboutComponent>
  );
};

const AboutComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  span {
    color: black;
    text-align: center;
    width: 50%;
    font-size: 2rem;
    b {
      text-decoration: underline;
    }
    @media screen and (max-width: 1000px) {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

export default About;
