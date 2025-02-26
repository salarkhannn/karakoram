import { useState } from 'react';

const ImageCarousel = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Return early if no images are available
  if (!product || !product.images || product.images.length === 0) {
    return <div>No images available</div>;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div id="Images" className="product-images w-[60vw] order-1 sm:order-2 relative">
      <div className="relative h-80 overflow-hidden rounded-lg">
        {/* Current image */}
        <img 
          src={product.images[currentIndex]} 
          alt={`${product.name} - Image ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          aria-label="Previous image"
        >
          ←
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          aria-label="Next image"
        >
          →
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {product.images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;