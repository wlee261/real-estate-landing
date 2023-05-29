import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const TextCarousel = ({ labels, paragraphs }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel-container"
    >
      {labels.map((label, index) => {
        return (
          <Carousel.Item key={index} className="carousel-item">
            <Carousel.Caption className="carousel-caption">
              <h4>{paragraphs[index]}</h4>
              <p>{label}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TextCarousel;
