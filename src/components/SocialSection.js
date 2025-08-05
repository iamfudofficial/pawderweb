import React from 'react';
import './SocialSection.css';

const instagramPosts = [
  { image: '/social/1.jpg', alt: 'Hund mit PAWDER', link: '#' },
  { image: '/social/2.jpg', alt: 'MEATBAR To-Go-Snack', link: '#' },
  { image: '/social/3.jpg', alt: 'Hund genießt PAWDER', link: '#' },
  { image: '/social/4.jpg', alt: 'Zwei Hunde mit PAWDER', link: '#' },
  { image: '/social/5.jpg', alt: 'Hund mit Mantel', link: '#' },
  { image: '/social/6.jpg', alt: 'Glücklicher Hund', link: '#' }
];

const SocialSection = () => (
  <section className="social-section">
    <h2 className="social-title">Folge uns auf Instagram</h2>
    <div className="social-carousel">
      {instagramPosts.map((post, idx) => (
        <a href={post.link} className="social-card" key={idx} target="_blank" rel="noopener noreferrer">
          <img src={post.image} alt={post.alt} className="social-img" />
        </a>
      ))}
    </div>
  </section>
);

export default SocialSection;
