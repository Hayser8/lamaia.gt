// Importa React y Keen Slider
import React, { useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Carousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    spacing: 10
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide overflow-hidden h-[940px] sm:h-[440px]">
        <img src="/images/cookies1.jpg" alt="Delicious Cookies" />
      </div>
      <div className="keen-slider__slide">
        <img src="/images/cookies2.webp" alt="More Cookies" />
      </div>
      <div className="keen-slider__slide">
        <img src="/images/cookies3.jpg" alt="Even More Cookies" />
      </div>
    </div>
  );
};

export default Carousel;
