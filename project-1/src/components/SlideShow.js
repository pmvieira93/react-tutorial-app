/*import React, { useState, useEffect } from "react";

function SlideShow({ carouselWaitTime = 0 }) {
  // Global
  const [slideIndex, setSlideIndex] = useState(1);

  showDivs(slideIndex);

  if(carouselWaitTime > 0) {
    carousel();
  }

  // Functions
  function plusDivs(n) {
    setSlideIndex(slideIndex + n);
    showDivs(slideIndex);
  }

  function currentDiv(n) {
    setSlideIndex(n);
    showDivs(slideIndex);
  }

  function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    if (n > x.length) {
      setSlideIndex(1);
    }

    if (n < 1) {
      setSlideIndex(x.length);
    }

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }

    x[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " w3-white";
  }

  function carousel() {
    setSlideIndex(slideIndex + 1);

    showDivs(slideIndex);

    setTimeout(carousel, carouselWaitTime); // Change image every 2 seconds
  }

  // Content
  return (
    <>
      <div className="w3-content w3-display-container" style={{maxWidth: '800px'}}>
        <img
          className="mySlides"
          alt=""
          src="assets/images/img_nature_wide.jpg"
          style={{width: '100%'}}
        />

        <img
          className="mySlides"
          alt=""
          src="assets/images/img_snow_wide.jpg"
          style={{width: '100%'}}
        />

        <img
          className="mySlides"
          alt=""
          src="assets/images/img_mountains_wide.jpg"
          style={{width: '100%'}}
        />

        <div
          className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle"
          style={{width: '100%'}}
        >
          <div className="w3-left w3-hover-text-khaki" onclick={()=>plusDivs(-1)}>
            &#10094;
          </div>

          <div className="w3-right w3-hover-text-khaki" onclick={()=>plusDivs(1)}>
            &#10095;
          </div>

          <span
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
            onclick={()=>currentDiv(1)}
          ></span>

          <span
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
            onclick={()=>currentDiv(2)}
          ></span>

          <span
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
            onclick={()=>currentDiv(3)}
          ></span>
        </div>
      </div>
    </>
  );
}


export default SlideShow;
*/

import React, { useState, useEffect } from 'react';

const SlideShow = ({ carouselWaitTime = 0 }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  const images = [
    'assets/images/img_nature_wide.jpg',
    'assets/images/img_snow_wide.jpg',
    'assets/images/img_mountains_wide.jpg'
  ];

  useEffect(() => {
    // Handle auto-carousel
    if (carouselWaitTime > 0) {
      const timer = setInterval(() => {
        setSlideIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, carouselWaitTime);

      return () => clearInterval(timer);
    }
  }, [carouselWaitTime]);

  const plusDivs = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex >= images.length) return 0;
      if (newIndex < 0) return images.length - 1;
      return newIndex;
    });
  };

  const currentDiv = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {images.map((src, index) => (
        <div
          key={src}
          className="w-full"
          style={{
            display: index === slideIndex ? 'block' : 'none'
          }}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4">
        <button
          onClick={() => plusDivs(-1)}
          className="text-white hover:text-yellow-200 text-2xl px-4 py-2"
        >
          ❮
        </button>
        
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => currentDiv(index)}
            className={`w-3 h-3 rounded-full border border-white 
              ${index === slideIndex ? 'bg-white' : 'bg-transparent'}
              hover:bg-white/50 transition-colors`}
          />
        ))}
        
        <button
          onClick={() => plusDivs(1)}
          className="text-white hover:text-yellow-200 text-2xl px-4 py-2"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default SlideShow;