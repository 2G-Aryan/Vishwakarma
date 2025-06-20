'use client';

import { TbArrowNarrowRight } from 'react-icons/tb';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CatalogueSection() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 400);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const items = [
    {
      id: "01",
      category: "BEDROOM SETUP",
      title: "Cozy Bedroom Setup",
      image: "/img/bedroom.jpeg",
      description: "Family bedroom with a clean and comfortable design for your family.",
      detailsLink: "/bedroom"
    },
    {
      id: "02",
      category: "KITCHEN SETUP",
      title: "Neat & Clean Kitchen",
      image: "/imgs/kiten.png",
      description: "Family kitchen with a clean and modern design.",
      detailsLink: "/kitchen-details"
    },
    {
      id: "03",
      category: "Bathroom",
      title: "Family Drowing Room",
      image: "/img/p1.jpeg",
      description: "Family drawing room with a clean and comfortable design for your family.",
      detailsLink: "/bathroom"
    },
    {
      id: "04",
      category: "LIVING SETUP",
      title: "Cozy Living Room Setup",
      image: "/img/livingroom.jpeg",
      description: "Living room with a cozy and modern design.",
      detailsLink: "/Livingroom"
    },
  ];

  const itemsToShow = (isMobile && !showAll) ? [items[0]] : items;

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-0 divide-gray-300 lg:divide-x">
        {itemsToShow.map((item) => (
          <div key={item.id} className="relative overflow-hidden group">
            <div className="transition-transform transform group-hover:scale-105 group-hover:brightness-110">
              <Image
                src={item.image}
                width={380}
                height={100}
                alt={item.title}
                layout="responsive"
                className="w-full h-auto"
              />
            </div>
            
            {/* Hover overlay with details */}
            <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <div className="flex justify-between pb-4">
                <p className="text-sm">{item.category}</p>
                <span className="text-sm">{item.id}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="mb-4 text-sm">{item.description}</p>
              
              {/* Separate details button for each item */}
              <div className="flex justify-end">
                <a 
                  href={item.detailsLink} 
                  className="flex items-center text-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                  aria-label={`See details of ${item.title}`}
                >
                  See details
                  <TbArrowNarrowRight className="ml-2" />
                </a>
              </div>
            </div>
            
            {/* Side category label (hidden on mobile) */}
            <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-0 hidden">
              <p className="tracking-wider -rotate-90">{item.category}</p>
              <span>{item.id}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show More button for mobile (under 400px) */}
      {(isMobile && !showAll) && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Show More Images
          </button>
        </div>
      )}
    </div>
  );
}