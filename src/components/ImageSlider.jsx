import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot, ChevronRight, ChevronLeft, Minus } from "lucide-react";
import "./image-slider.css";



export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  return (
    <section
      aria-label="Image Slider"
      className="block
      sm:block sm:w-[50vw] sm:ml-[4vw] sm:mr-[4vw]
      md:block md:w-[40vw] md:ml-[4vw] md:mr-[4vw]
      lg:block
      xl:hidden
      2xl:hidden"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={`Product image ${index + 1}`}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn sm:pl-[4vw] sm:pr-[4vw]"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ChevronLeft size={32} color="#000000" strokeWidth={1.25}/>
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn sm:pl-[4vw] sm:pr-[4vw]"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ChevronRight size={32} color="#000000" strokeWidth={1.25} />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <Minus size={200} color="#000000" strokeWidth={1} style={{ transform: 'scale(1.5)'}} />
            ) : (
              <Minus size={200} color="#4e4e4e" strokeWidth={1} style={{ transform: 'scale(1.5)'}}/>
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
