// src/components/LanguageSlider/index.tsx
import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";

interface LanguageSliderProps {
  languages: string[];
  title: string; // Ensure title is included in the props
}

const SliderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
`;

const SlideContent = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
  color: #18216d;
  background: rgb(249, 250, 252);
  border-radius: 8px;
  margin: 0 15px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background: #18216d;
  }
  
  .slick-dots li.slick-active button {
    background: #18216d;
  }
`;

const Title = styled.h6`
  font-size: 2rem;
  text-align: center;
  padding: 0 0 40px 0;
  color: #18216d;
`;

const LanguageSlider: React.FC<LanguageSliderProps> = ({ languages, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <SliderContainer>
      <Title>{title}</Title>
      <StyledCarousel {...settings}>
        {languages.map((language, index) => (
          <SlideContent key={index}>
            {language}
          </SlideContent>
        ))}
      </StyledCarousel>
    </SliderContainer>
  );
};

export default LanguageSlider;