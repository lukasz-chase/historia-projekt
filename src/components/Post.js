import React from "react";
//styling
import styled from "styled-components";
//link
import { Link } from "react-router-dom";

const Post = ({ source, alt, text, link }) => {
  return (
    <PostComponent to={link}>
      <img src={source} alt={alt} />
      <span>{text}</span>
    </PostComponent>
  );
};

const PostComponent = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    border: 1px solid black;
  }
  img {
    height: 25rem;
    width: 20rem;
    object-fit: cover;
    border-bottom: 1px solid white;
  }
  span {
    color: white;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    padding: 1rem;
  }
`;

export default Post;
