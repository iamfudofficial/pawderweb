import React from 'react';
import './BrandVideoSection.css';

const BrandVideoSection = () => (
  <section className="brandvideo-section">
    <video className="brandvideo-player" controls poster="/video/brandvideo-poster.jpg">
      <source src="/video/markenvideo.mp4" type="video/mp4" />
      Ihr Browser unterstützt das Video-Tag nicht.
    </video>
  </section>
);

export default BrandVideoSection;
