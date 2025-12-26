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

        {/* Masonry Layout: Uses columns instead of fixed grid rows to respect image height */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id} 
              className="break-inside-avoid mb-4 relative overflow-hidden group rounded-lg shadow-lg border-2 border-transparent hover:border-primary transition-colors"
            >
              <img
                src={img.url}
                alt={img.alt}
                onError={handleImageError}
                // w-full h-auto ensures the image scales to width but keeps its natural height/aspect ratio
                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;