import React from "react";
//styling
import styled from "styled-components";
//link
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterComponent>
      <span>
        <Link
          to="/zrodla"
          className="link"
          onClick={() => window.scrollTo(0, 0)}
        >
          źródła
        </Link>
      </span>
    </FooterComponent>
  );
};

const FooterComponent = styled.footer`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  width: 100%;
  height: 4vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    font-size: 0.5rem;
  }
  span {
    padding: 5px 0;
    background: linear-gradient(
      90deg,
      rgb(28, 27, 27) 0%,
      rgb(26, 23, 23) 100%
    );
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .link {
      text-decoration: none;
      color: white;
    }
  }
`;

export default Footer;
