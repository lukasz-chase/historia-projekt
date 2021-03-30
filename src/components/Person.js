import React from "react";
import styled from "styled-components";
const Person = ({ zdjecie, osoba, godnosc }) => {
  return (
    <PersonComponent>
      <img src={zdjecie} alt={osoba} />
      <b>{godnosc}</b>
    </PersonComponent>
  );
};

const PersonComponent = styled.div`
  height: 20rem;
  width: 20rem;
  text-align: center;
  border: 1px solid black;
  margin: 1rem;
  border-radius: 20rem;
  overflow: hidden;
  background-color: white;
  img {
    height: 17rem;
    width: 100%;
    object-fit: cover;
  }
`;

export default Person;
