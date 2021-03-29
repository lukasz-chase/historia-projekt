import React from "react";
//styling
import styled from "styled-components";
//icons
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCloseSquare,
} from "react-icons/ai";
//data
import { GalleryInfo } from "../components/HiroshimaData";

const FullImageModal = ({ currentIndex, modal, setModal, setCurrentIndex }) => {
  return (
    <Modal modal={modal}>
      <AiOutlineCloseSquare
        className="close-icon"
        onClick={() => setModal(!modal)}
      />
      <div className="arrow-left">
        <AiOutlineArrowLeft
          onClick={() =>
            currentIndex - 1 === -1
              ? setCurrentIndex(GalleryInfo.length - 1)
              : setCurrentIndex(currentIndex - (1 % GalleryInfo.length))
          }
          className="arrow"
        />
      </div>
      <div className="asd">
        <div className="image">
          <img
            src={GalleryInfo[currentIndex].img.default}
            alt={GalleryInfo[currentIndex].info}
          />
        </div>

        <div className="image-details">
          <span>{GalleryInfo[currentIndex].info}</span>
          <span>źródło: {GalleryInfo[currentIndex].zrodlo}</span>
        </div>
      </div>
      <div className="arrow-right">
        <AiOutlineArrowRight
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % GalleryInfo.length)
          }
          className="arrow"
        />
      </div>
    </Modal>
  );
};

const Modal = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  align-items: center;
  justify-content: space-evenly;
  z-index: 100;
  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3rem;
    margin: 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      color: tomato;
    }
  }
  .arrow-left,
  .arrow-right {
    cursor: pointer;
    .arrow {
      font-size: 3rem;
    }
  }
  .arrow-left {
    @media screen and (max-width: 1000px) {
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      position: absolute;
      top: 50%;
      left: 0;
    }
  }
  .arrow-right {
    @media screen and (max-width: 1000px) {
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      position: absolute;
      top: 50%;
      right: 0;
    }
  }
  .image {
    img {
      max-height: 40rem;
      max-width: 30rem;
      object-fit: cover;
    }
  }
  .image-details {
    display: flex;
    flex-direction: column;
  }
`;

export default FullImageModal;
