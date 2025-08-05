import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import ProductShowcase from './components/ProductShowcase';
import FullWidthImage from './components/FullWidthImage';
import BestsellerSection from './components/BestsellerSection';
import BlogSection from './components/BlogSection';
import BrandVideoSection from './components/BrandVideoSection';
import NewsletterSection from './components/NewsletterSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import BlogLaeufigkeit from './components/Blog_Laeufigkeit';
import BlogWandern from './components/Blog_Wandern';
import BlogZecken from './components/Blog_Zecken';
import Shop from './components/Shop';
import Story from './components/Story';
import StoryCards from './components/StoryCards';
import Quality from './components/Quality';
import AnimatedIcons from './components/AnimatedIcons';
import FloatingCTA from './components/FloatingCTA';
import Shipping from './components/Shipping';
import PawChat from './components/PawChat';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Impressum from './components/Impressum';
import './App.css';

function MainContent() {
  return (
    <div className="App">
      <HeaderBar />
      {/* 1. Hero Section */}
      <section className="pawder-hero-banner">
        <div className="pawder-hero-left">
          <div className="pawder-hero-toptext">Shake it. Sprinkle it. Wag it.</div>
          <div className="meatbar-big" style={{margin: 0}}>Pawder – Das Gewürz für glückliche Hunde</div>
          <a href="#products" className="pawder-hero-btn">JETZT VORBESTELLEN</a>
        </div>
        <div className="pawder-hero-right">
          <div className="pawder-hero-product-image">
            <img src="/untershopbild/082e7ab3-8861-4adf-90e2-7aa6966ee556_removalai_preview.png" alt="Pawder Produkt" className="hero-product-main" />
          </div>
          <div className="pawder-hero-new">NEU</div>
        </div>
      </section>
      {/* Animated Icons */}
      <AnimatedIcons />
      {/* 2. Problem Section */}
      <section className="story-problem-section">
        <div className="story-problem-inner">
          <h2 className="story-problem-title">Futterfrust & Sorgen</h2>
          <div className="story-problem-text">Viele Hunde sind wählerisch. Als Hundebesitzer willst du nur das Beste – aber oft bleibt das Futter stehen. Du fragst dich: Bekommt mein Hund genug Nährstoffe? Ist er glücklich?</div>
        </div>
      </section>
      {/* 3. Transformation Section */}
      <section className="story-transformation-section">
        <div className="story-transformation-inner">
          <h2 className="story-transformation-title">Aus Futter wird ein Erlebnis</h2>
          <div className="story-transformation-text">Einfach drüberstreuen – und schon wird aus jedem Futter ein Festmahl. Selbst mäkelige Hunde lieben Pawder!</div>
          <img src="/demo/hundfrisst.png" alt="Hund frisst begeistert" className="story-transformation-img" />
        </div>
      </section>
      {/* 4. Lösung Section */}
      <section id="pawder-solution" className="story-solution-section">
        <div className="story-solution-inner">
          <h2 className="story-solution-title">Die Lösung: Pawder</h2>
          <div className="story-solution-text">Genau deshalb gibt es Pawder: Das erste Gewürz, das nicht nur schmeckt, sondern auch gezielt unterstützt – für Fell, Knochen, Magen & mehr. Entwickelt mit Tierärzten, 100% natürlich.</div>
          <img src="/demo/pawderdose.png" alt="Pawder Dose" className="story-solution-img" />
        </div>
      </section>
      {/* 5. Sorten-Showcase */}
      <ProductShowcase />
      {/* 6. Story Cards Section */}
      <StoryCards />
      <FullWidthImage src="/untershopbild/Screenshot 2025-04-27 115738.png" alt="Premiumqualität nach dem Rezept der Natur" />
      <BestsellerSection />
      <BrandVideoSection />
      <BlogSection />
      <NewsletterSection />
      <SocialSection />
      {/* 7. Social Proof Section */}
      <section className="story-socialproof-section">
        <div className="story-socialproof-inner">
          <h2 className="story-socialproof-title">Glückliche Hunde & Menschen</h2>
          <div className="story-socialproof-text">Über 1.000 glückliche Hunde und ihre Menschen schwören auf Pawder.</div>
        </div>
      </section>
      {/* 8. Call-to-Action Section */}
      <section className="story-cta-section">
        <div className="story-cta-inner">
          <h2 className="story-cta-title">Mach jede Mahlzeit zum Lieblingsmoment!</h2>
          <a href="#products" className="pawder-hero-btn">Jetzt Pawder entdecken</a>
        </div>
      </section>
      <Footer />
      <FloatingCTA />
      <PawChat />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/story" element={<Story />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/blog/laeufigkeit" element={<BlogLaeufigkeit />} />
        <Route path="/blog/wandern" element={<BlogWandern />} />
        <Route path="/blog/zecken" element={<BlogZecken />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
}

export default App;
