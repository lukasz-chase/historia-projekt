import React from "react";
//styling
import styled from "styled-components";
//react scroll
import { Link } from "react-router-dom";

const NagasakiDropdown = ({ link1, link2, text1, text2 }) => {
  return (
    <DropdownComponent>
      <ul>
        <li>
          <Link to="/nagasaki/pomnik1" className="link">
            Kwiat zycia i pokoju
          </Link>
        </li>
        <li>
          <Link to="/nagasaki/pomnik2" className="link">
            Statula pokoju
          </Link>
        </li>
        <li>
          <Link to="/nagasaki/galeria" className="link">
            galeria
          </Link>
        </li>
      </ul>
    </DropdownComponent>
  );
};

const DropdownComponent = styled.div`
  width: 200px;
  position: absolute;
  top: 80px;
  z-index: 20;
  ul {
    list-style: none;
    text-align: start;
    li {
      padding: 1rem;
      background: rgba(0, 0, 0, 0.9);
      &:first-letter {
        text-transform: upperCase;
      }
      .link {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default NagasakiDropdown;