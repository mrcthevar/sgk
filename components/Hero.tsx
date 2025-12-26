import React from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Content - Clean White/Transparent to show Cream Texture, with subtle light gradient at top */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
        <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in-up">
           <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2 shadow-sm">
             <span className="w-2 h-2 bg-white rounded-full"></span> Pure Vegetarian
           </span>
           <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2 shadow-sm">
             <span className="w-2 h-2 bg-white rounded-full"></span> Jain Food Available
           </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 font-bold mb-6 leading-tight animate-fade-in-up delay-100 drop-shadow-sm">
          <span className="text-gray-800">Shri</span> <span className="text-primary">Gopalakrishna</span><br/>
          <span className="text-3xl md:text-5xl font-light italic mt-2 block text-accent">Veg Restaurant</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium animate-fade-in-up delay-200">
          South Indian | Punjabi | Chinese | Pav Bhaji
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up delay-300">
          <a 
            href="#menu" 
            onClick={(e) => handleNavClick(e, '#menu')}
            className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors duration-300 rounded-sm shadow-lg border border-primary"
          >
            View Full Menu
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary/5 transition-colors duration-300 rounded-sm flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-primary" />
            Order Delivery
          </a>
        </div>
        
        <div className="mt-8 text-sm font-semibold animate-fade-in-up delay-500">
            <span className="inline-block px-4 py-2 border border-gray-200 bg-white/60 text-gray-500 rounded-full backdrop-blur-sm shadow-sm">
                Min Order ₹500 • Free Home Delivery (3km Radius)
            </span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#menu" 
        onClick={(e) => handleNavClick(e, '#menu')}
        className="absolute bottom-10 z-10 text-gray-400 animate-bounce hover:text-primary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;