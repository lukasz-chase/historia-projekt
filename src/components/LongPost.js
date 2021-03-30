import React from "react";
//styling
import styled from "styled-components";
//link
import { Link } from "react-router-dom";

const Post = ({ source, alt, text, link, imgOrder, spanOrder, header }) => {
  //handlers
  const linksHandler = () => window.scrollTo(0, 0);

  return (
    <PostComponent
      to={link}
      spanOrder={spanOrder}
      imgOrder={imgOrder}
      onClick={() => linksHandler()}
    >
      <div className="img">
        <span>{header}</span>
        <img src={source} alt={alt} />
      </div>
      <span>{text}</span>
    </PostComponent>
  );
};

const PostComponent = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  background-color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  &:hover {
    border: 1px solid white;
  }
  .img {
    order: ${({ imgOrder }) => imgOrder};
    display: flex;
    flex-direction: column;
    img {
      height: 25rem;
      width: 20rem;
      object-fit: cover;
      align-self: flex-end;
      order: 2;
      @media screen and (max-width: 1000px) {
        height: 15rem;
        width: 10rem;
        align-self: center;
      }
    }
    span {
      order: 1;
      @media screen and (max-width: 1000px) {
        align-self: center;
      }
    }
  }

  span {
    order: ${({ spanOrder }) => spanOrder};
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    padding: 0 1rem;
    display: flex;
    text-align: left;
    align-items: center;
    margin-left: 3rem;
    line-height: 40px;
    @media screen and (max-width: 1000px) {
      font-size: 1rem;
      margin: 0;
      padding: 0.5rem;
    }
  }
`;

export default Post;
