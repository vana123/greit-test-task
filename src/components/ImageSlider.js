import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover button {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  flex: 0 0 100%; 
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  opacity: 0; 
  transition: opacity 0.3s ease-in-out;
  z-index: 10;

  &:hover {
    background: black;
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const ImageSlider = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  if (!images.length) {
    return <p>Зображення недоступні</p>;
  }

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      <PrevButton onClick={prevImage}>◀</PrevButton>
      <ImageWrapper style={{ transform: `translateX(${-current * 100}%)` }}>
        {images.map((img, index) => (
          <Image key={index} src={img} alt={`Slide ${index + 1}`} />
        ))}
      </ImageWrapper>
      <NextButton onClick={nextImage}>▶</NextButton>
    </SliderContainer>
  );
};

export default ImageSlider;
