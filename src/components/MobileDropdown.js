import React from "react";
//styling
import styled from "styled-components";
//react router
import { Link } from "react-router-dom";

const MobileDropdown = ({
  toggle,
  setToggle,
  setMenu,
  link1,
  link2,
  link3,
  text1,
  text2,
}) => {
  const clickHandler = () => {
    setMenu(false);
    setToggle(false);
  };
  return (
    <MobileDropdownComponent className={toggle ? "active" : ""}>
      <ul>
        <li>
          <Link to={link1} onClick={() => clickHandler()} className="link">
            {text1}
          </Link>
        </li>
        <li>
          <Link to={link2} onClick={() => clickHandler()} className="link">
            {text2}
          </Link>
        </li>
        <li>
          <Link to={link3} onClick={() => clickHandler()} className="link">
            galeria
          </Link>
        </li>
      </ul>
    </MobileDropdownComponent>
  );
};

const MobileDropdownComponent = styled.div`
  .active {
    display: block;
  }
  ul {
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 960px) {
      display: none;
    }
    li {
      padding: 1rem;
      background: linear-gradient(
        90deg,
        rgb(28, 27, 27) 0%,
        rgb(26, 23, 23) 100%
      );
      &:first-letter {
        text-transform: upperCase;
      }
      .link {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
      }
      .active {
        border-bottom: 1px solid rgb(67, 185, 209);
      }
    }
  }
`;

export default MobileDropdown;
