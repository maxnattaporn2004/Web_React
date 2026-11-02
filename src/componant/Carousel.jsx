import "./Carousel.css";
import { useState } from "react";
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://www.deenabroker.com/Management/image/image_slide/imgs91374534620210923_153032.jpg",
    "https://www.deenabroker.com/Management/image/image_slide/imgs117272414220210923_152956.jpg",
    "https://www.deenabroker.com/Management/image/image_slide/imgs151668666620210923_153046.jpg",
  ];

  
  function nextSlide() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  
  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }


  return (
    <div className="carousel">
      <div className="carousel-row">
        <button className="btn-next-back" onClick={prevSlide} aria-label="สไลด์ก่อนหน้า">
          <span aria-hidden="true">◀</span>
        </button>

        {/* All slides are stacked; only the active one fades in, so the
            change can be animated smoothly instead of popping. */}
        <div className="carousel-stage">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`images-hero${index === currentSlide ? " is-active" : ""}`}
            />
          ))}
        </div>

        <button className="btn-next-back" onClick={nextSlide} aria-label="สไลด์ถัดไป">
          <span aria-hidden="true">▶</span>
        </button>
      </div>

      <div className="pagination-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`ไปสไลด์ที่ ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
