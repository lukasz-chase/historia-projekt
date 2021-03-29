import React from "react";
//styling
import styled from "styled-components";
const Footer = ({ zrodlo, zrodlo2 }) => {
  return (
    <FooterComponent>
      <span>źródło/a: </span>
      <span>{zrodlo}</span>
      <span>{zrodlo2}</span>
    </FooterComponent>
  );
};

const FooterComponent = styled.footer`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  width: 100%;
  min-height: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media screen and (max-width: 1000px) {
    font-size: 0.5rem;
  }
  span {
    padding: 5px 0;
  }
`;

export default Footer;
