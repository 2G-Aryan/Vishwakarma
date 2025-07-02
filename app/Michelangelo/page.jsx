import React from 'react'

const page = () => {
      const images = [
    "/imgs/q2.jpeg",
    "/imgs/q3.jpeg",
    "/imgs/q5.jpeg",
    "/imgs/q6.jpeg",
    "/imgs/q13.jpeg",
    "/img/aboutpic.jpeg",
    "/img/p99.jpeg",
    "/img/p5.jpeg",
    "/img/p7.jpeg",
    "/img/p4.jpeg",
    
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
  )
}

export default page
