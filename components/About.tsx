import React from 'react';
import { Leaf, Award, Utensils, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text */}
            <div className="text-left animate-fade-in-up">
                <h3 className="text-secondary uppercase tracking-widest font-bold text-sm mb-3">About Us</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                  A Tradition of <br/>
                  <span className="italic text-primary">Pure Veg Delight</span>
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Indulge in a vibrant culinary journey at <strong>Shri Gopalakrishna Veg Restaurant</strong>, Bhandup West's newest destination for authentic vegetarian delights. We offer an extensive menu of traditional South and North Indian dishes, alongside a tempting selection of Chinese cuisine.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Designed for families and food enthusiasts alike, the restaurant prides itself on a welcoming atmosphere, swift service, and the highest standards of hygiene. Experience the rich, traditional flavours crafted with care, perfect for any meal or celebration.
                </p>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-accent/10 p-2 rounded-full"><Leaf className="w-5 h-5 text-accent"/></div>
                        <span className="font-bold text-gray-700 text-lg">100% Pure Vegetarian Kitchen</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-2 rounded-full"><Utensils className="w-5 h-5 text-primary"/></div>
                        <span className="font-bold text-gray-700 text-lg">South Indian, Punjabi & Chinese</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-secondary/10 p-2 rounded-full"><Award className="w-5 h-5 text-secondary"/></div>
                        <span className="font-bold text-gray-700 text-lg">Authentic Taste & Hygiene</span>
                    </div>
                </div>

                <a 
                    href="#menu" 
                    onClick={(e) => handleNavClick(e, '#menu')}
                    className="inline-block px-8 py-3 bg-gray-900 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-gray-800 transition-colors shadow-lg cursor-pointer"
                >
                    Explore Menu
                </a>
            </div>

            {/* Right Column: Image */}
            <div className="relative animate-fade-in-up delay-200">
                {/* Main Image Container */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-[10px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 z-10 bg-gray-100">
                     {/* 
                         IMPORTANT: Ensure you have a file named 'about-us.jpg' inside your 'public' folder.
                     */}
                    <img 
                        src="/about-us.jpg" 
                        alt="Lord Krishna Mural at Shri Gopalakrishna Restaurant" 
                        className="w-full h-auto object-cover aspect-[4/3]"
                    />
                </div>
                
                {/* Decorative Backdrops */}
                <div className="absolute top-10 -right-6 w-full h-full border-2 border-primary rounded-xl -z-10 transform -rotate-3"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;