import React, { useState } from "react";
//styling
import styled from "styled-components";
//components
import ImageBeforeAndAfter from "../components/ImageBeforeAndAfter";
import Header from "../components/Header";
import Footer from "../components/Footer";
//data
import { GalleryInfo } from "../components/ImagesData";
//images
import nagasakiBefore from "../images/nagasakiBefore.jpg";
import nagasakiAfter from "../images/nagasakiAfter.jpg";
import FullImageModal from "../components/FullImageModal";
import hiroshimaBefore from "../images/hiroshimaBefore.JPG";
import hiroshimaAfter from "../images/hiroshimaAfter.JPG";

const Galeria = () => {
  //state
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  //handler
  const imageHandler = (number) => {
    setModal(!modal);
    setCurrentIndex(number);
  };
  return (
    <>
      <AboutComponent>
        <h1>Galeria pamięci</h1>
        <Header color="black" bgColor="black" />
        <div className="images">
          {GalleryInfo.map((image, index) => (
            <img
              src={image.img.default}
              alt={image.info}
              onClick={() => imageHandler(index)}
              key={index}
            />
          ))}
        </div>
        <h1>Nagasaki przed i po</h1>
        <ImageBeforeAndAfter before={nagasakiBefore} after={nagasakiAfter} />
        <h1>Hiroshima przed i po</h1>
        <ImageBeforeAndAfter before={hiroshimaBefore} after={hiroshimaAfter} />
        <FullImageModal
          setModal={setModal}
          modal={modal}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </AboutComponent>
      <Footer />
    </>
  );
};

const AboutComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  text-align: center;
  background-color: gainsboro;
  .images {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    padding: 0 1rem;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    img {
      height: 30rem;
      width: 100%;
      object-fit: cover;
      border: 1px solid white;
      border-radius: 7px;
      &:hover {
        border: 1px solid black;
        cursor: pointer;
      }
      @media screen and (max-width: 1000px) {
        height: 10rem;
        width: 100%;
      }
    }
  }
`;

export default Galeria;
