import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = [
    {
      id: 1,
      category: 'Produkte',
      question: 'Was ist PAWDER und wie funktioniert es?',
      answer: 'PAWDER ist das erste natürliche Gewürz speziell für Hunde. Es wird einfach über das normale Futter gestreut und macht jedes Futter schmackhafter und gesünder. Unsere 4 Sorten unterstützen verschiedene Bereiche der Hundegesundheit.'
    },
    {
      id: 2,
      category: 'Produkte',
      question: 'Welche Sorten gibt es und wofür sind sie?',
      answer: 'Wir haben 4 Sorten: Leber-Power (Vitalität & Fell), Knochen-Kick (Knochen & Gelenke), Magenwohl (Verdauung) und Fell-Glanz (Haut & Fell). Jede Sorte ist speziell für bestimmte Bedürfnisse entwickelt.'
    },
    {
      id: 3,
      category: 'Produkte',
      question: 'Sind die Produkte für alle Hunde geeignet?',
      answer: 'Unsere Produkte sind für gesunde Hunde ab 6 Monaten geeignet. Bei Unsicherheiten oder Vorerkrankungen empfehlen wir, vorher mit Ihrem Tierarzt zu sprechen.'
    },
    {
      id: 4,
      category: 'Produkte',
      question: 'Wie dosiere ich PAWDER richtig?',
      answer: 'Die Dosierung beträgt 1-2 Teelöffel pro Mahlzeit, je nach Größe Ihres Hundes. Kleinere Hunde bekommen 1 Teelöffel, größere Hunde 2 Teelöffel. Sie können es über das trockene oder nasse Futter streuen.'
    },
    {
      id: 5,
      category: 'Bestellung & Versand',
      question: 'Wie lange dauert die Lieferung?',
      answer: 'Wir versenden innerhalb von 1-3 Werktagen. Die Lieferung erfolgt kostenlos ab einem Bestellwert von 50€ mit DHL. Unter 50€ betragen die Versandkosten 4,99€.'
    },
    {
      id: 6,
      category: 'Bestellung & Versand',
      question: 'Welche Zahlungsmethoden akzeptieren Sie?',
      answer: 'Wir akzeptieren PayPal, Kreditkarte, Klarna und Apple Pay. Alle Zahlungen sind SSL-verschlüsselt und sicher. Sie können auch auf Rechnung kaufen.'
    },
    {
      id: 7,
      category: 'Bestellung & Versand',
      question: 'Kann ich meine Bestellung zurückgeben?',
      answer: 'Ja, Sie haben 14 Tage Zeit, Ihre Bestellung zurückzugeben. Kontaktieren Sie uns einfach per E-Mail oder über unser Kontaktformular. Wir übernehmen die Rücksendekosten.'
    },
    {
      id: 8,
      category: 'Bestellung & Versand',
      question: 'Versenden Sie auch ins Ausland?',
      answer: 'Ja, wir versenden europaweit. Die Versandkosten und Lieferzeiten variieren je nach Land. Versandkostenfrei ab 50€ gilt nur für Deutschland.'
    },
    {
      id: 9,
      category: 'Qualität & Sicherheit',
      question: 'Sind die Zutaten wirklich 100% natürlich?',
      answer: 'Ja, alle unsere Zutaten sind 100% natürlich und ohne künstliche Zusätze. Wir verwenden nur hochwertige, von Tierärzten empfohlene Inhaltsstoffe.'
    },
    {
      id: 10,
      category: 'Qualität & Sicherheit',
      question: 'Wie lange sind die Produkte haltbar?',
      answer: 'Unsere Produkte sind 12 Monate haltbar. Bitte lagern Sie sie trocken und kühl. Nach dem Öffnen sollten sie innerhalb von 6 Monaten verbraucht werden.'
    },
    {
      id: 11,
      category: 'Qualität & Sicherheit',
      question: 'Werden die Produkte getestet?',
      answer: 'Ja, alle unsere Produkte werden von Tierärzten entwickelt und getestet. Wir führen regelmäßige Qualitätskontrollen durch und arbeiten nur mit zertifizierten Lieferanten.'
    },
    {
      id: 12,
      category: 'Service',
      question: 'Wie kann ich Sie kontaktieren?',
      answer: 'Sie erreichen uns per E-Mail unter hello@pawder.de, telefonisch unter +49 30 12345678 oder über unser Kontaktformular. Wir sind Mo-Do 9-17 Uhr und Fr 9-15 Uhr für Sie da.'
    },
    {
      id: 13,
      category: 'Service',
      question: 'Gibt es einen Newsletter?',
      answer: 'Ja, Sie können sich für unseren Newsletter anmelden und erhalten regelmäßig Tipps zur Hundegesundheit, neue Produkte und exklusive Angebote.'
    },
    {
      id: 14,
      category: 'Service',
      question: 'Kann ich Händler werden?',
      answer: 'Ja, wir suchen immer nach neuen Handelspartnern. Kontaktieren Sie uns für weitere Informationen über unsere Händlerprogramme und Konditionen.'
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <div className="faq-page">
      <div className="faq-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Zurück
        </button>
        
        <div className="faq-content">
          <div className="faq-header">
            <h1>Häufig gestellte Fragen</h1>
            <p className="faq-subtitle">Alles was Sie über PAWDER wissen müssen</p>
          </div>
          
          <div className="faq-categories">
            {categories.map(category => (
              <div key={category} className="faq-category">
                <h2>{category}</h2>
                <div className="faq-items">
                  {faqData
                    .filter(item => item.category === category)
                    .map(item => (
                      <div key={item.id} className="faq-item">
                        <button
                          className={`faq-question ${openItems[item.id] ? 'open' : ''}`}
                          onClick={() => toggleItem(item.id)}
                        >
                          {item.question}
                          <span className="faq-icon">{openItems[item.id] ? '−' : '+'}</span>
                        </button>
                        <div className={`faq-answer ${openItems[item.id] ? 'open' : ''}`}>
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-contact">
            <h2>Haben Sie weitere Fragen?</h2>
            <p>Falls Sie hier keine Antwort gefunden haben, kontaktieren Sie uns gerne direkt.</p>
            <div className="faq-contact-buttons">
              <button 
                onClick={() => navigate('/contact')} 
                className="contact-btn"
              >
                Kontakt aufnehmen
              </button>
              <button 
                onClick={() => navigate('/')} 
                className="home-btn"
              >
                Zur Startseite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 