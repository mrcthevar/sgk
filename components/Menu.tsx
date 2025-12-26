import React, { useState, useRef, useEffect } from 'react';
import { MenuCategory } from '../types';
import { MENU_ITEMS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.SOUTH_INDIAN);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id="menu" className="py-24 bg-transparent min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-secondary uppercase tracking-widest font-bold text-sm mb-2">Our Offerings</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Explore The Menu</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        {/* Category Dropdown */}
        <div className="mb-12 relative max-w-md mx-auto" ref={dropdownRef}>
            <label className="block text-center text-gray-500 text-xs uppercase font-bold tracking-widest mb-2">Select Category</label>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-primary/20 rounded-lg shadow-sm hover:border-primary text-gray-800 font-bold tracking-wide uppercase transition-all duration-300"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
            >
              <span className="truncate mr-4">{activeCategory}</span>
              {isDropdownOpen ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
            </button>

            {isDropdownOpen && (
              <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <ul role="listbox">
                  {Object.values(MenuCategory).map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setActiveCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-wide border-b border-gray-50 last:border-none transition-colors duration-200 ${
                          activeCategory === category
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:bg-red-50 hover:text-primary'
                        }`}
                        role="option"
                        aria-selected={activeCategory === category}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between animate-fade-in-up">
               <div>
                   <div className="flex justify-between items-start mb-2">
                     <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 pr-4 leading-tight">
                       {item.name}
                     </h4>
                     <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                   </div>
                   {item.description && (
                       <p className="text-gray-500 text-sm mb-3 leading-snug">
                         {item.description}
                       </p>
                   )}
                   <div className="flex gap-2">
                      <span className="text-[10px] uppercase font-bold text-accent bg-green-50 px-2 py-0.5 rounded border border-green-200">Veg</span>
                   </div>
               </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
           <div className="text-center py-12 text-gray-500">
             <p>No items found in this category.</p>
           </div>
        )}

        <div className="text-center mt-16 bg-white p-8 rounded-lg max-w-2xl mx-auto border border-gray-100 shadow-sm">
           <p className="text-gray-800 font-serif text-lg mb-2">Can't decide what to eat?</p>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-primary font-bold hover:text-red-700 underline underline-offset-4 uppercase text-sm tracking-widest"
          >
            Call us for recommendations
          </a>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FF0000;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cc0000; 
        }
      `}</style>
    </section>
  );
};

export default Menu;