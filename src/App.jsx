import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ShortenerForm from './components/ShortenerForm';
import ShortenedLinks from './components/ShortenedLinks';
import Features from './components/Features';
import Cta from './components/Cta';
import Footer from './components/Footer';
import './App.css';
import '../src/styles/global.css'
import '../src/styles/variables.css'

function App() {
  const [shortenedLinks, setShortenedLinks] = useState(() => {
    const savedLinks = localStorage.getItem('shortenedLinks');
    return savedLinks ? JSON.parse(savedLinks) : [];
  });

  const addShortenedLink = (original, shortened) => {
    const newLink = { original, shortened };
    const updatedLinks = [newLink, ...shortenedLinks];
    setShortenedLinks(updatedLinks);
    localStorage.setItem('shortenedLinks', JSON.stringify(updatedLinks));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <div className="container">
          <ShortenerForm onShorten={addShortenedLink} />
          <ShortenedLinks links={shortenedLinks} />
          <Features />
        </div>
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;