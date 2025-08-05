import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Zurück
        </button>
        
        <div className="about-content">
          <div className="about-header">
            <h1>Über PAWDER</h1>
            <p className="about-subtitle">Das erste Gewürz für glückliche Hunde</p>
          </div>
          
          <div className="about-story">
            <div className="about-section">
              <h2>Unsere Geschichte</h2>
              <p>
                PAWDER wurde aus der Liebe zu Hunden geboren. Als wir bemerkten, dass viele Hunde 
                ihr Futter nicht gerne fressen oder unter Mangelernährung leiden, beschlossen wir, 
                eine Lösung zu entwickeln, die sowohl gesund als auch lecker ist.
              </p>
              <p>
                Nach jahrelanger Forschung und Entwicklung in Zusammenarbeit mit Tierärzten und 
                Ernährungswissenschaftlern entstand PAWDER - das erste natürliche Gewürz speziell 
                für Hunde, das jedes Futter aufwertet und die Gesundheit unterstützt.
              </p>
            </div>
            
            <div className="about-section">
              <h2>Unsere Mission</h2>
              <p>
                Wir möchten, dass jeder Hund die bestmögliche Ernährung erhält. Unser Ziel ist es, 
                Hundebesitzern dabei zu helfen, ihre vierbeinigen Freunde gesund und glücklich zu 
                halten - mit natürlichen, hochwertigen Produkten, die Hunde lieben.
              </p>
            </div>
            
            <div className="about-section">
              <h2>Unsere Werte</h2>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">🌿</div>
                  <h3>Natürlichkeit</h3>
                  <p>100% natürliche Zutaten ohne künstliche Zusätze</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🔬</div>
                  <h3>Wissenschaft</h3>
                  <p>Von Tierärzten entwickelt und getestet</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">💚</div>
                  <h3>Nachhaltigkeit</h3>
                  <p>Umweltfreundliche Verpackung und Produktion</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🐕</div>
                  <h3>Liebe zu Hunden</h3>
                  <p>Jedes Produkt wird mit Liebe für Hunde entwickelt</p>
                </div>
              </div>
            </div>
            
            <div className="about-section">
              <h2>Unser Team</h2>
              <p>
                Hinter PAWDER steht ein Team aus leidenschaftlichen Hundeliebhabern, 
                Tierärzten, Ernährungswissenschaftlern und Produktentwicklern. 
                Gemeinsam arbeiten wir daran, die beste Ernährung für Hunde zu schaffen.
              </p>
            </div>
            
            <div className="about-section">
              <h2>Kontakt</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>PAWDER GmbH</strong><br />
                  Hundestr. 1<br />
                  12345 Berlin
                </div>
                <div className="contact-item">
                  <strong>E-Mail:</strong> hello@pawder.de<br />
                  <strong>Telefon:</strong> +49 30 12345678
                </div>
                <div className="contact-item">
                  <strong>Öffnungszeiten:</strong><br />
                  Mo-Do: 9-17 Uhr<br />
                  Fr: 9-15 Uhr
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 