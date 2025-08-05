import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Impressum.css';

const Impressum = () => {
  const navigate = useNavigate();

  return (
    <div className="impressum-page">
      <div className="impressum-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Zurück
        </button>
        
        <div className="impressum-content">
          <div className="impressum-header">
            <h1>Impressum</h1>
            <p className="impressum-subtitle">Rechtliche Informationen</p>
          </div>
          
          <div className="impressum-sections">
            <div className="impressum-section">
              <h2>Angaben gemäß § 5 TMG</h2>
              <div className="company-info">
                <p><strong>PAWDER GmbH</strong></p>
                <p>Hundestr. 1<br />12345 Berlin</p>
                <p>Deutschland</p>
              </div>
            </div>
            
            <div className="impressum-section">
              <h2>Vertreten durch</h2>
              <p>Geschäftsführer: Max Mustermann</p>
            </div>
            
            <div className="impressum-section">
              <h2>Kontakt</h2>
              <div className="contact-details">
                <p><strong>Telefon:</strong> +49 30 12345678</p>
                <p><strong>E-Mail:</strong> hello@pawder.de</p>
                <p><strong>Website:</strong> www.pawder.de</p>
              </div>
            </div>
            
            <div className="impressum-section">
              <h2>Registereintrag</h2>
              <p>Eintragung im Handelsregister</p>
              <p>Registergericht: Amtsgericht Berlin-Charlottenburg</p>
              <p>Registernummer: HRB 123456</p>
            </div>
            
            <div className="impressum-section">
              <h2>Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>DE123456789</p>
            </div>
            
            <div className="impressum-section">
              <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>Max Mustermann<br />PAWDER GmbH<br />Hundestr. 1<br />12345 Berlin</p>
            </div>
            
            <div className="impressum-section">
              <h2>EU-Streitschlichtung</h2>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.</p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>
            
            <div className="impressum-section">
              <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
            
            <div className="impressum-section">
              <h2>Haftung für Inhalte</h2>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </div>
            
            <div className="impressum-section">
              <h2>Haftung für Links</h2>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
              <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.</p>
            </div>
            
            <div className="impressum-section">
              <h2>Urheberrecht</h2>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum; 