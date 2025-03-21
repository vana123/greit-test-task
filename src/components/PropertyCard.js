import React from "react";
import ImageSlider from "./ImageSlider";
import styled from "styled-components";
import HeartIcon from "../assets/icons/heart.svg";
import locationIcon from "../assets/icons/maps-pin-line-icon.svg";
import BedIcon from "../assets/icons/bed-icon.svg";
import SqftIcon from "../assets/icons/sqft-icon.svg";
import BathIcon from "../assets/icons/bath-icon.svg";

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 100%;
  max-width: 360px;
  min-height: 400px;
  position: relative;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
`;

const Tag = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #007b7b;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 12px;
  font-weight: bold;
`;

const LikeButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  display: flex;

  &:hover {
    background: #f8f8f8;
  }
  
  img {
    width: 18px;
    height: 18px;
  }
`;

const InfoContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 12px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #d9534f;
  margin: 0;
`;

const Location = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 5px 0;
  
  svg {
    margin-right: 5px;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: gray;
  padding-top: 8px;
  gap: 10px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  width: 1px;
  height: 10px;
  background: gray; 
  opacity: 0.5;
`;

const PropertyCard = ({ data }) => {
  return (
    <Card>
      <InfoContainer>
        <ImageContainer>
          <ImageSlider images={data.images} />
          <Tag>NEW BUILDING</Tag>
          <LikeButton>
            <img src={HeartIcon} alt="Like" />
          </LikeButton>
        </ImageContainer>
        <TitleRow>
          <Title>{data.name}</Title>
          <Price>${data.price}</Price>
        </TitleRow>
        <Location>
          <img src={locationIcon} alt="Location" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
          {data.province}
        </Location>
        <Features>
          <Feature>
            <img src={BedIcon} alt="Location" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
            {data.rooms} Beds</Feature>
          <Divider />
          <Feature>
            <img src={BathIcon} alt="Location" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
            {data.bathrooms} Baths
          </Feature>
          <Divider />
          <Feature>
            <img src={SqftIcon} alt="Location" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
            {data.size} sqft</Feature>
        </Features>
      </InfoContainer>
    </Card>
  );
};

export default PropertyCard;
