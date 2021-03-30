import React from "react";
import styled from "styled-components";

const Book = ({ title, src, alt }) => {
  return (
    <BookComponent>
      <h2>{title}</h2>
      <img src={src} alt={alt} />
    </BookComponent>
  );
};

const BookComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1rem;
  flex-direction: column;
  color: black;
  width: 20rem;
  box-shadow: 5px 5px 5px black;
  h2 {
    font-size: 1rem;
    line-height: 20px;
  }
  img {
    height: 25rem;
    width: 20rem;
    object-fit: cover;
  }
`;

export default Book;
