import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imageBase from '../../constants/imageBase';

const ProductImageGallery = ({ images }) => {
  // Default to the first image
  const [mainImage, setMainImage] = useState(images[0]);

  // Handle thumbnail click to update main image
  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  // Responsive settings for the carousel
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <div>
      {/* Main Image Display */}
      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <img
          src={`${imageBase}${mainImage}`}
          alt="Main Product"
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
      </div>

      {/* Gallery Slider */}
      <Carousel responsive={responsive} arrows={true} showDots={false}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              padding: '0.5rem',
              cursor: 'pointer',
              border: mainImage === img ? '2px solid #10B981' : '2px solid transparent',
              borderRadius: '4px'
            }}
            onClick={() => handleThumbnailClick(img)}
          >
            <img
              src={`${imageBase}${img}`}
              alt={`Thumbnail ${index}`}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductImageGallery;
