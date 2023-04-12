import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bridgeBackground from "../assets/bridgeBackground.webp";
import SRPImage from "../assets/srpBanner.png";
import driverViewBackground from "../assets/driverViewBackground.png"

const BackgroundImages = ({ children }) => {
  const [index, setIndex] = useState(0);
  const images = [
    bridgeBackground,
    SRPImage,
    driverViewBackground
  ]
  // change the background image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
      <ImageContainer>
        <Image src={images[index]} />
      </ImageContainer>
      {children}
    </Background>
  )
}

const Background = styled.div`
  position: relative;
  width: 100%;
  min-height: 75vh;
  overflow: hidden;
  margin-top: 200px;
  @media (max-width: 1300px) {
    margin-top: 100px;
  }
  @media (max-width: 600px) {
    margin-top: 190px;
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: zoom-in-out 6s infinite;
  z-index: -1;

  @keyframes zoom-in-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default BackgroundImages;