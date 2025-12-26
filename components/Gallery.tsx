import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const currentSrc = img.src;
    
    // Fallback chain: .jpeg -> .jpg -> .JPG -> .png
    // This ensures that if the file is named differently, we try all common variations until one works.
    if (currentSrc.endsWith('.jpeg')) {
        img.src = currentSrc.replace('.jpeg', '.jpg');
    } else if (currentSrc.endsWith('.jpg')) {
        img.src = currentSrc.replace('.jpg', '.JPG');
    } else if (currentSrc.endsWith('.JPG')) {
        img.src = currentSrc.replace('.JPG', '.png');
    }
  };

  return (
    <section id="gallery" className="py-24 bg-dark-900 relative">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-secondary uppercase tracking-widest font-bold text-sm mb-2">Ambience & Food</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Gallery</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={img.id} 
              // Create a repeating pattern: 2-col, 1-col, 1-col, 2-col (repeats every 4 items)
              className={`relative overflow-hidden group rounded-lg shadow-lg border-2 border-transparent hover:border-primary transition-colors ${
                (index % 4 === 0) || (index % 4 === 3) ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                onError={handleImageError}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;