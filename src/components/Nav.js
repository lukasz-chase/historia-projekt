import React from "react";
//router
import { Link } from "react-router-dom";
//styled
import styled from "styled-components";

const Nav = () => {
  return (
    <NavComponent>
      <Link className="link" to="/">
        Hiroshima
      </Link>
      <Link className="link" to="/nagasaki">
        Nagasaki
      </Link>
    </NavComponent>
  );
};

const NavComponent = styled.nav`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .link {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Nav;
