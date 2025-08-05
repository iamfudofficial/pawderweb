import React from 'react';
import { Link } from 'react-router-dom';
import './Story.css';

const Story = () => {
  return (
    <div className="story-page">
      <div className="story-header">
        <Link to="/" className="story-back-btn">← Zurück zur Startseite</Link>
        <h1 className="story-title">Die Pawder Geschichte</h1>
        <p className="story-subtitle">Wie alles begann</p>
      </div>
      
      <div className="story-content">
        <div className="story-section">
          <div className="story-image">
            <img src="/demo/pawder-founder.jpg" alt="Pawder Gründer" />
          </div>
          <div className="story-text">
            <h2>Die Vision</h2>
            <p>Alles begann mit einer einfachen Beobachtung: Unser Hund Max war wählerisch beim Futter. Trotz hochwertiger Zutaten blieb oft etwas übrig. Wir fragten uns: Wie können wir das Futter interessanter machen, ohne die Gesundheit zu kompromittieren?</p>
            <p>Die Idee für Pawder war geboren – das erste Gewürz speziell für Hunde, das nicht nur schmeckt, sondern auch gezielt unterstützt.</p>
          </div>
        </div>
        
        <div className="story-section story-section-reverse">
          <div className="story-text">
            <h2>Die Entwicklung</h2>
            <p>Gemeinsam mit Tierärzten und Ernährungsexperten entwickelten wir Pawder. Jede Sorte hat einen spezifischen Zweck:</p>
            <ul>
              <li><strong>Leber-Power:</strong> Für Vitalität und Energie</li>
              <li><strong>Knochen-Kick:</strong> Für starke Knochen und Gelenke</li>
              <li><strong>Magenwohl:</strong> Für eine gesunde Verdauung</li>
              <li><strong>Fell-Glanz:</strong> Für glänzendes Fell und gesunde Haut</li>
            </ul>
          </div>
          <div className="story-image">
            <img src="/demo/pawder-development.jpg" alt="Pawder Entwicklung" />
          </div>
        </div>
        
        <div className="story-section">
          <div className="story-image">
            <img src="/demo/pawder-success.jpg" alt="Erfolgreiche Hunde" />
          </div>
          <div className="story-text">
            <h2>Der Erfolg</h2>
            <p>Heute verwandelt Pawder tausende von Mahlzeiten in Lieblingsmomente. Hunde, die vorher mäkelig waren, freuen sich jetzt auf ihr Futter. Hundebesitzer sind erleichtert, weil sie wissen, dass ihr Vierbeiner nicht nur lecker, sondern auch gesund isst.</p>
            <p>Pawder ist mehr als nur ein Topping – es ist die Brücke zwischen Gesundheit und Genuss.</p>
          </div>
        </div>
      </div>
      
      <div className="story-cta">
        <h3>Bereit, die Pawder-Erfahrung zu erleben?</h3>
        <Link to="/shop" className="story-cta-btn">Jetzt Pawder entdecken</Link>
      </div>
    </div>
  );
};

export default Story; 