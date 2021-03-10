import React, { useRef } from "react";
//styled
import styled from "styled-components";
//icons
import { FaArrowsAltH } from "react-icons/fa";

const ImageBeforeAndAfter = ({ after, before }) => {
  //refs
  const slider = useRef(null);
  const beforeImage = useRef(null);
  //handlers
  const drag = (e) => {
    let xPos = e.nativeEvent.layerX;
    beforeImage.current.style.width = xPos + "px";
    slider.current.style.left = xPos + "px";
    if (xPos < 30) {
      beforeImage.current.style.width = 0;
      slider.current.style.left = 0;
    }
  };
  return (
    <Container onMouseMove={drag} onTouchMove={drag}>
      <div className="img-container-after">
        <img className="before" src={after} alt="before" />
      </div>
      <div className="img-container-before" ref={beforeImage}>
        <img className="after" src={before} alt="after" />
      </div>
      <div className="slider" ref={slider}>
        <FaArrowsAltH className="slider-icon" />
      </div>
    </Container>
  );
};

const Container = styled.div`
    position: relative;
    width: 30vw;
    height: 80vh;
    @media screen and (max-width:1000px){
     width:40vh;
    }
    .img-container-before,
    .img-container-after {
      position: absolute;
      width: 30vw;
      height: 80vh;
      @media screen and (max-width:1000px){
     width:40vh;
    }
      img {
        width: 30vw;
        height: 80vh;
        object-fit: cover;
        @media screen and (max-width:1000px){
     width:40vh;
    }
      }
    }
    .img-container-before {
      width: 15vw;
      overflow: hidden;
      @media screen and (max-width:1000px){
     width:20vh;
    }
    }
  }
  .slider {
    width: 0.5rem;
    background: white;
    height: 100%;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    pointer-events: none;
    @media screen and (max-width:1000px){
      width:0.2rem;
    }
  .slider-icon{
      background-color:white;
      border-radius:1rem;
      position:absolute;
    font-size:3rem;
    top:50%;
    left:50%;
    transform: translate(-50%, 50%);
    @media screen and (max-width:1000px){
      font-size:2rem;
    }
  }
`;

export default ImageBeforeAndAfter;
