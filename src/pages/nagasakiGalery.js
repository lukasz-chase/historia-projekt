import React, { useState } from "react";
//styling
import styled from "styled-components";
//components
import ImageBeforeAndAfter from "../components/ImageBeforeAndAfter";
//data
import { GalleryInfo } from "../components/HiroshimaData";
//images
import nagasakiBefore from "../images/nagasakiBefore.jpg";
import nagasakiAfter from "../images/nagasakiAfter.jpg";
import FullImageModal from "../components/FullImageModal";

const About = () => {
  //state
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  //handler
  const imageHandler = (number) => {
    setModal(!modal);
    setCurrentIndex(number);
  };
  return (
    <AboutComponent>
      <h1>Galeria pamięci</h1>
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
      <FullImageModal
        setModal={setModal}
        modal={modal}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </AboutComponent>
  );
};

const AboutComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  text-align: center;
  .images {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    img {
      height: 30rem;
      width: 100%;
      object-fit: cover;
      @media screen and (max-width: 1000px) {
        height: 10rem;
        width: 100%;
      }
    }
  }
`;

export default About;
