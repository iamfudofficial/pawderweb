import React, { useState, useRef, useEffect } from 'react';
import './PawChat.css';

const OPENROUTER_API_KEY = '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';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const PawChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Wuff! 🐕 Hallo! Ich bin PAW, dein persönlicher Pawder Assistent! Ich bin eine KI und helfe dir gerne bei allen Fragen rund um unsere Hundewürze. Was möchtest du wissen?",
      sender: 'paw',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const pawResponses = {
    greeting: [
      "Wuff! 🐕 Hallo! Ich bin PAW, dein persönlicher Pawder Assistent! Ich helfe dir gerne bei allen Fragen rund um unsere Hundewürze. Was möchtest du wissen?",
      "Hallo! 🐾 Schön, dass du da bist! Ich bin PAW und kenne mich bestens mit Pawder aus. Wie kann ich dir helfen?",
      "Hey! 🐕 Willkommen bei Pawder! Ich bin PAW und beantworte gerne alle deine Fragen zu unseren Produkten, Versand und mehr!"
    ],
    shipping: [
      "🚚 Versand? Klar! Wir versenden kostenlos ab 50€ in Deutschland mit DHL. Unter 50€ kostet der Versand nur 4,99€. Die Lieferung dauert 1-3 Werktage - super schnell! 📦",
      "📦 Versandkosten im Detail: Ab 50€ Bestellwert versenden wir kostenlos mit DHL. Unter 50€ kostet der Versand 4,99€. Lieferung erfolgt in 1-3 Werktagen direkt zu dir nach Hause! ⚡",
      "⚡ Versandinfo: Kostenlos ab 50€, unter 50€ nur 4,99€. Wir versenden mit DHL und die Lieferung dauert 1-3 Werktage. Alle Pakete werden sicher verpackt und schnell zu dir gebracht! 🚚"
    ],
    products: [
      "🦴 Wir haben 4 tolle Sorten: Leber-Power (für Vitamin A-Z), Knochen-Kick (für starke Knochen), Magenwohl (für die Verdauung) und Fell-Glanz (für gesundes Fell)! Jede Sorte ist speziell für bestimmte Bedürfnisse entwickelt. 💚",
      "🐕 Unsere 4 Pawder Sorten: Leber-Power mit Vitaminen, Knochen-Kick für Knochengesundheit, Magenwohl für die Verdauung und Fell-Glanz für schönes Fell. Alle sind 100% natürlich und von Tierärzten entwickelt! 🦴",
      "💚 Unsere Pawder Sorten: Leber-Power (Vitamine), Knochen-Kick (Knochen), Magenwohl (Verdauung) und Fell-Glanz (Fell). Jede Sorte ist auf spezifische Bedürfnisse abgestimmt und 100% natürlich! 🐕"
    ],
    ingredients: [
      "🌿 Pawder besteht nur aus natürlichen Zutaten! Keine künstlichen Zusätze, Aromen oder Konservierungsstoffe. Nur das Beste aus der Natur, sorgfältig ausgewählt für die Gesundheit deines Hundes! ✅",
      "✅ Pawder ist 100% natürlich! Keine künstlichen Zusätze, nur hochwertige natürliche Zutaten. Entwickelt mit Tierärzten und speziell für Hunde zusammengestellt. Gesund und lecker! 🌿",
      "🐾 Pawder enthält ausschließlich natürliche Zutaten! Keine künstlichen Aromen, Farbstoffe oder Konservierungsmittel. Nur das Beste aus der Natur, von Tierärzten entwickelt für die optimale Gesundheit deines Hundes! 💚"
    ],
    order: [
      "🛍️ Bestellen kannst du ganz einfach im Shop! Gehe auf 'Produkte' in der Navigation oder klicke auf 'Jetzt einkaufen'. Sichere Bezahlung mit PayPal, Kreditkarte oder Klarna! 💳",
      "💳 Bestellprozess: Einfach im Shop die gewünschten Produkte auswählen, in den Warenkorb legen und sicher bezahlen (PayPal, Kreditkarte, Klarna). Versand erfolgt innerhalb 1-3 Werktagen! 📱",
      "📱 Bestellung: Gehe zu 'Produkte' und wähle deine Lieblingssorten aus. Sichere Bezahlung möglich, Versand kostenlos ab 50€. Einfach und schnell! 🛍️"
    ],
    price: [
      "💰 Pawder kostet 19,99€ pro Dose (100g). Das reicht für etwa 1-2 Monate je nach Hundegröße. Ab 50€ Bestellwert versenden wir kostenlos! 🐕",
      "💵 Eine Dose Pawder kostet 19,99€ für 100g. Das ist ein fairer Preis für hochwertige, natürliche Hundewürze. Versandkostenfrei ab 50€ Bestellwert! 💚",
      "🐕 Pawder Preis: 19,99€ pro 100g Dose. Hochwertige Qualität zu einem fairen Preis. Versand kostenlos ab 50€ Bestellwert! 💰"
    ],
    dosage: [
      "🥄 Dosierung: 1-2 Teelöffel pro Mahlzeit, je nach Hundegröße. Kleinere Hunde 1 TL, größere Hunde 2 TL. Einfach über das Futter streuen und gut vermischen! 🐕",
      "📏 Dosierung Pawder: 1-2 Teelöffel pro Mahlzeit. Kleine Hunde: 1 TL, große Hunde: 2 TL. Über das Futter streuen und vermischen. Einfach und effektiv! 🥄",
      "🐾 Dosierung: 1-2 Teelöffel pro Mahlzeit je nach Größe deines Hundes. Einfach über das Futter streuen und gut vermischen. Die natürlichen Zutaten werden gerne gefressen! 📏"
    ],
    benefits: [
      "🌟 Pawder Vorteile: Natürliche Zutaten, von Tierärzten entwickelt, verbessert die Futterakzeptanz, unterstützt die Gesundheit, verschiedene Sorten für unterschiedliche Bedürfnisse! 🐕",
      "💪 Pawder Benefits: 100% natürlich, gesundheitsfördernd, lecker für Hunde, einfach zu dosieren, verschiedene Sorten, von Experten entwickelt! 🌟",
      "🐕 Pawder Vorteile: Natürliche Inhaltsstoffe, verbessert die Futterqualität, unterstützt die Gesundheit, verschiedene Sorten, einfach anzuwenden, von Tierärzten empfohlen! 💪"
    ],
    allergy: [
      "⚠️ Allergien: Pawder enthält nur natürliche Zutaten. Bei bekannten Allergien deines Hundes solltest du die Zutatenliste prüfen. Bei Unsicherheit konsultiere deinen Tierarzt! 🐕",
      "🔍 Allergien: Alle Zutaten sind auf der Verpackung aufgelistet. Bei Allergien deines Hundes prüfe die Zutatenliste. Bei Fragen wende dich an deinen Tierarzt! ⚠️",
      "🐾 Allergien: Pawder ist natürlich, aber prüfe bei Allergien deines Hundes die Zutatenliste. Bei Unsicherheit frage deinen Tierarzt um Rat! 🔍"
    ],
    storage: [
      "🏠 Lagerung: Pawder trocken und kühl lagern, am besten in der Originalverpackung. Nach dem Öffnen gut verschließen. Haltbarkeit: 12 Monate nach Herstellung! 📦",
      "📦 Lagerung Pawder: Trocken und kühl aufbewahren, Originalverpackung verwenden, nach Öffnung gut verschließen. Haltbar 12 Monate ab Herstellungsdatum! 🏠",
      "🏠 Aufbewahrung: Pawder trocken und kühl lagern, gut verschließen nach dem Öffnen. Haltbarkeit beträgt 12 Monate. Einfach und praktisch! 📦"
    ],
    default: [
      "Wuff! 🐕 Das ist eine interessante Frage! Ich helfe dir gerne bei Fragen zu unseren Produkten, Versand, Preisen, Dosierung oder allgemeinen Infos zu Pawder. Was möchtest du genau wissen?",
      "🐾 Hmm, da bin ich mir nicht ganz sicher. Ich kann dir gerne bei Fragen zu unseren 4 Sorten, Versand, Preisen, Dosierung oder der Anwendung helfen. Kannst du das anders formulieren?",
      "Wuff! 🐕 Ich helfe dir gerne bei Fragen zu Pawder! Du kannst mich zu Produkten, Versand, Preisen, Dosierung oder allgemeinen Infos fragen. Was interessiert dich? 🐾"
    ]
  };

  const getPawResponse = async (userMessage) => {
    try {
             const systemPrompt = `Du bist PAW, ein freundlicher und hilfsbereiter KI-Assistent für Pawder, eine Marke für natürliche Hundewürze. 

WICHTIGE INFORMATIONEN ÜBER PAWDER:
- Pawder ist eine Marke für natürliche Hundewürze
- 4 Sorten: Leber-Power (Vitamine), Knochen-Kick (Knochen), Magenwohl (Verdauung), Fell-Glanz (Fell)
- Preis: 19,99€ pro 100g Dose
- Versand: Kostenlos ab 50€, unter 50€ 4,99€ mit DHL
- Lieferzeit: 1-3 Werktage
- Dosierung: 1-2 Teelöffel pro Mahlzeit je nach Hundegröße
- 100% natürliche Zutaten, von Tierärzten entwickelt
- Haltbarkeit: 12 Monate, trocken und kühl lagern
- Bezahlung: PayPal, Kreditkarte, Klarna

DEIN STIL:
- Verwende immer Emojis (🐕, 🦴, 💚, 🌿, etc.)
- Sei freundlich, hilfsbereit und sympathisch
- Antworte auf Deutsch
- Verwende "Wuff!" am Anfang von Antworten
- Sei informativ aber nicht zu lang
- Wenn du etwas nicht weißt, sage das ehrlich
- WICHTIG: Beende immer deine Sätze vollständig und schneide nicht mitten im Satz ab
- Schreibe kurze, prägnante Antworten (maximal 2-3 Sätze)

Antworte jetzt auf die Frage des Kunden:`;

      const response = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'https://pawder-shop.netlify.app',
          'X-Title': 'Pawder Shop'
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1:free',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
                     max_tokens: 500,
           temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

             const data = await response.json();
       let responseText = data.choices[0].message.content;
       
       // Sicherstellen, dass die Antwort vollständig ist
       if (responseText && !responseText.endsWith('.') && !responseText.endsWith('!') && !responseText.endsWith('?')) {
         responseText += '!';
       }
       
       return responseText;
    } catch (error) {
      console.error('AI API Error:', error);
      // Fallback zu den ursprünglichen Antworten bei Fehlern
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('versand') || lowerMessage.includes('lieferung') || lowerMessage.includes('kostenlos')) {
        return pawResponses.shipping[Math.floor(Math.random() * pawResponses.shipping.length)];
      }
      
      if (lowerMessage.includes('produkt') || lowerMessage.includes('sorte') || lowerMessage.includes('leber')) {
        return pawResponses.products[Math.floor(Math.random() * pawResponses.products.length)];
      }
      
      if (lowerMessage.includes('preis') || lowerMessage.includes('kosten') || lowerMessage.includes('€')) {
        return pawResponses.price[Math.floor(Math.random() * pawResponses.price.length)];
      }
      
      return "Wuff! 🐕 Entschuldigung, ich habe gerade technische Probleme. Aber ich helfe dir gerne bei Fragen zu Pawder! 🐾";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // KI-Antwort abrufen
      const aiResponse = await getPawResponse(inputValue);
      
      const pawResponse = {
        id: messages.length + 2,
        text: aiResponse,
        sender: 'paw',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, pawResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      // Fallback-Antwort bei Fehlern
      const pawResponse = {
        id: messages.length + 2,
        text: "Wuff! 🐕 Entschuldigung, ich habe gerade technische Probleme. Aber ich helfe dir gerne bei Fragen zu Pawder! 🐾",
        sender: 'paw',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, pawResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
             {/* Chat Toggle Button */}
       <div className={`paw-chat-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
         <div className="paw-avatar">
           <img src="/paw-chat-avatar.png" alt="PAW" className="paw-avatar-img" />
         </div>
        <div className="paw-status">
          <span className="paw-name">PAW</span>
          <span className="paw-status-text">{isOpen ? 'Chat schließen' : 'Live Chat'}</span>
        </div>
        <div className="paw-indicator">
          <span className="paw-dot"></span>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="paw-chat-window">
                     <div className="paw-chat-header">
             <div className="paw-chat-avatar">
               <img src="/paw-chat-avatar.png" alt="PAW" className="paw-avatar-img" />
             </div>
            <div className="paw-chat-info">
              <h3>PAW - Dein Pawder Assistent</h3>
              <span className="paw-online">🟢 Online</span>
            </div>
            <button className="paw-close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>

          <div className="paw-chat-messages">
            {messages.map((message) => (
                             <div key={message.id} className={`paw-message ${message.sender}`}>
                 {message.sender === 'paw' && (
                   <div className="paw-message-avatar">
                     <img src="/paw-chat-avatar.png" alt="PAW" className="paw-avatar-img" />
                   </div>
                 )}
                <div className="paw-message-content">
                  <div className="paw-message-text">{message.text}</div>
                  <div className="paw-message-time">
                    {message.timestamp.toLocaleTimeString('de-DE', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            
                         {isTyping && (
               <div className="paw-message paw">
                 <div className="paw-message-avatar">
                   <img src="/paw-chat-avatar.png" alt="PAW" className="paw-avatar-img" />
                 </div>
                <div className="paw-message-content">
                  <div className="paw-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="paw-chat-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Schreib PAW eine Nachricht..."
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="paw-send-btn"
            >
              🐾
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PawChat; 