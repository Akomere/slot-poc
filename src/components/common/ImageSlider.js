import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    const index = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    const index = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(index);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handlePrev}>
        <ArrowBackIos />
      </IconButton>
      <Paper elevation={3} style={{ width: 300, height: 200, overflow: 'hidden' }}>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Paper>
      <IconButton onClick={handleNext}>
        <ArrowForwardIos />
      </IconButton>
    </div>
  );
}

export default ImageSlider;
