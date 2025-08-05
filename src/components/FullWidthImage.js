import React from 'react';
import './FullWidthImage.css';

const FullWidthImage = ({ src, alt }) => (
  <div className="fullwidth-image-wrapper">
    <img src={src} alt={alt} className="fullwidth-image" />
  </div>
);

export default FullWidthImage;
