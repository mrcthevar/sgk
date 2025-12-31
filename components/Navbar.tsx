import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept internal links (starting with #)
    if (href.startsWith('#')) {
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
      setIsMobileMenuOpen(false);
    } else {
        // For external links or files (like PDF), allow default behavior
        setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className={`p-2 rounded-full border-2 transition-colors duration-300 ${isScrolled ? 'border-accent bg-white' : 'border-primary bg-white/10'}`}>
            <span className={`font-bold text-xl ${isScrolled ? 'text-accent' : 'text-primary'}`}>SGK</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-lg md:text-xl font-serif font-bold tracking-wide transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              Shri Gopalakrishna
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-bold ${isScrolled ? 'text-accent' : 'text-accent'}`}>
              Pure Veg Restaurant
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 relative group font-bold ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
             href="/SGK_Menu.pdf"
             download="Shri_Gopalakrishna_Menu.pdf"
             className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
             <FileText className="w-4 h-4" />
             PDF Menu
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors text-primary`}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 transform overflow-y-auto py-10 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-2xl font-serif text-gray-800 hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
           href="/SGK_Menu.pdf"
           download="Shri_Gopalakrishna_Menu.pdf"
           onClick={() => setIsMobileMenuOpen(false)}
           className="text-xl font-serif text-primary font-bold flex items-center gap-2 border-2 border-primary/20 px-6 py-3 rounded-full hover:bg-primary/5 transition-colors"
        >
           <FileText className="w-5 h-5" />
           Download PDF Menu
        </a>
      </div>
    </nav>
  );
};

export default Navbar;