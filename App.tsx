import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Contact from './components/Reservation'; // Reusing component file but renamed logic
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading for smooth entry
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-cream-texture text-gray-800 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;