'use client';

import React from 'react';

const GalleryPage = () => {
  const images = [
    "/imgs/q9.jpeg",
    "/imgs/q8.jpeg",
    "/imgs/q5.jpeg",
    "/imgs/q7.jpeg",
    "/img/bedroom.jpeg",
    "/img/p2.jpeg"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg group"
          >
            <img 
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-90"
              src={src} 
              alt={`Gallery image ${index + 1}`}
            />
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;