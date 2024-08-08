import React, { useEffect, useState } from 'react';
import './Home.css';
import Slider1 from './slider/Slider1';
import Slider2 from './slider/Slider2';
import Slider3 from './slider/Slider3';

const slides = [<Slider1 />, <Slider2 />, <Slider3 />];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default Slider;
