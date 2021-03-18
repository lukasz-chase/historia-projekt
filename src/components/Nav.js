import React, { useState } from "react";
//router
import { Link } from "react-router-dom";
//styled
import styled from "styled-components";
//components
import HiroshimaDropdown from "./HiroshimaDropdown";
import NagasakiDropdown from "./NagasakiDropdown";
import MobileDropdown from "./MobileDropdown";
//icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  //state
  //hiroshima
  const [hiroshimaDropdown1, setHiroshimaDropdown] = useState(false);
  const [nagasakiToggle, setNagasakiToggle] = useState(false);
  //nagasaki
  const [nagasakiDropdown1, setNagasakiDropdown] = useState(false);
  const [hiroshimaToggle, setHiroshimaToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  //handlers
  const dropdownHandler = (a) => (window.innerWidth < 960 ? a(false) : a(true));
  const toggleDropdown = (a, b) => (window.innerWidth < 960 ? a(!b) : a(false));
  return (
    <NavComponent>
      <div className="nav-logo">
        <span>
          <Link to="/" className="nav-link">
            About
          </Link>
        </span>
      </div>
      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {!menu ? (
          <AiOutlineMenu className="icon" />
        ) : (
          <AiOutlineClose className="icon" />
        )}
      </div>
      <ul className={menu ? "nav-menu active" : "nav-menu"}>
        <li
          className="nav-item dropdown"
          onMouseEnter={() => dropdownHandler(setNagasakiDropdown)}
          onMouseLeave={() => setNagasakiDropdown(false)}
          onClick={() => toggleDropdown(setNagasakiToggle, nagasakiToggle)}
        >
          <span className="dropdown-header">
            Nagasaki <i className="fas fa-caret-down" />
          </span>
          {nagasakiDropdown1 && (
            <NagasakiDropdown text1={"pomnik1"} text2={"pomnik2"} />
          )}
        </li>
        {nagasakiToggle && (
          <MobileDropdown
            toggle={nagasakiToggle}
            setMenu={setMenu}
            setToggle={setNagasakiToggle}
            text1="pomnik1"
            text2="pomnik2"
            link1="/nagasaki/pomnik1"
            link2="/nagasaki/pomnik2"
            link3="/nagasaki/galeria"
          />
        )}
        <li
          className="nav-item dropdown"
          onMouseEnter={() => dropdownHandler(setHiroshimaDropdown)}
          onMouseLeave={() => setHiroshimaDropdown(false)}
          onClick={() => toggleDropdown(setHiroshimaToggle, hiroshimaToggle)}
        >
          <span className="dropdown-header">
            Hiroshima <i className="fas fa-caret-down" />
          </span>
          {hiroshimaDropdown1 && (
            <HiroshimaDropdown text1={"pomnik1"} text2={"pomnik2"} />
          )}
        </li>
        {hiroshimaToggle && (
          <MobileDropdown
            toggle={hiroshimaToggle}
            setToggle={setHiroshimaToggle}
            setMenu={setMenu}
            text1="pomnik1"
            text2="pomnik2"
            link1="/hiroshima/pomnik1"
            link2="/hiroshima/pomnik2"
            link3="/hiroshima/galeria"
          />
        )}
      </ul>
    </NavComponent>
  );
};

const NavComponent = styled.nav`
  height: 80px;
  width: 100%;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 10;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }

  .nav-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    text-decoration: none;
    font-size: 2rem;
    @media screen and (max-width: 960px) {
      font-size: 1.5rem;
    }
    .nav-link {
      text-decoration: none;
      color: white;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .menu-icon {
    display: none;
    @media screen and (max-width: 960px) {
      display: block;
      font-size: 1rem;
      cursor: pointer;
    }
    .icon {
      color: white;
      font-size: 2rem;
    }
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 110vh;
      position: absolute;
      top: 78px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-item {
      display: flex;
      align-items: center;
      height: 80px;
      .dropdown-header {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        &:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 960px) {
          text-align: center;
          padding: 2rem;
          width: 100%;
          display: table;
          &:hover {
            border-radius: 0;
          }
        }
      }
      .active {
        border-bottom: 1px solid rgb(67, 185, 209);
      }
    }
  }
  .nav-links-mobile {
    display: none;
  }

  .nav-menu.active {
    @media screen and (max-width: 960px) {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 20;
    }
  }

  .nav-links-mobile {
    @media screen and (max-width: 960px) {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #1888ff;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
      &:hover {
        background: #fff;
        color: #1888ff;
        transition: 250ms;
      }
    }
  }
  .NavbarItems {
    @media screen and (max-width: 960px) {
      position: relative;
    }
  }
`;

export default Nav;
