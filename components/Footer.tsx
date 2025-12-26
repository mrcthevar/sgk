import React from 'react';
import { Facebook, MapPin, Phone, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
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
    <footer className="bg-dark-950 text-white/80 py-12 border-t border-dark-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-white font-bold tracking-wider">Shri Gopalakrishna</h2>
            <p className="text-sm leading-relaxed max-w-xs text-white/70">
              Serving the finest vegetarian delicacies in Bhandup. From sizzling dosas to spicy pav bhaji, we have it all.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors bg-dark-900 p-2 rounded-full border border-dark-800"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors bg-dark-900 p-2 rounded-full border border-dark-800"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white uppercase tracking-widest font-bold text-sm mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white uppercase tracking-widest font-bold text-sm mb-6">Visit Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <a href="https://share.google/LBUG3VdR1LGb4yHKk" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline transition-colors text-left">
                  Shop No.2/9, Opp. Jainam Hall, LBS Road, Bhandup (W), Mumbai - 400078
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="font-bold text-white">9152763455 / 9152153455</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center text-xs text-white/50 pt-8 border-t border-dark-900 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Shri Gopalakrishna Veg Restaurant. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Food Lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;