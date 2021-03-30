import React from "react";
//styling
import styled from "styled-components";
//icons
import { AiOutlineArrowLeft } from "react-icons/ai";
//history
import { useHistory } from "react-router-dom";
//components
import Line from "../components/Line";

const Header = ({ color }) => {
  const history = useHistory();
  return (
    <HeaderComponent color={color}>
      <div className="button" onClick={() => history.goBack()}>
        <AiOutlineArrowLeft />
        <span>Powrót</span>
      </div>
      <Line width="100%" color={color} />
    </HeaderComponent>
  );
};

const HeaderComponent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  cursor: pointer;
  .button {
    align-self: flex-start;
    border: ${({ color }) => `1px solid ${color}`};
    width: 8rem;
    padding: 1rem 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Header;
