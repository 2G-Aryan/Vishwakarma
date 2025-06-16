import { TbArrowNarrowRight } from 'react-icons/tb';
import Image from 'next/image';

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      category: "BEDROOM SETUP",
      title: "Cozy Bedroom Setup",
      image: "/img/bedroom.jpeg",
      description: "Family bedroom with a clean and comfortable design for your family.",
    },
    {
      id: "02",
      category: "KITCHEN SETUP",
      title: "Neat & Clean Kitchen",
      image: "/imgs/kiten.png",
      description: "Family kitchen with a clean and modern design.",
    },
    {
      id: "03",
      category: "Bathroom",
      title: "Family Drowing Room",
      image: "/img/p1.jpeg",
      description: "Family drawing room with a clean and comfortable design for your family.",
    },
    {
      id: "04",
      category: "LIVING SETUP",
      title: "Cozy Living Room Setup",
      image: "/img/livingroom.jpeg",
      description: "Living room with a cozy and modern design.",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div className="transition-transform transform group-hover:scale-105 group-hover:brightness-110">
            <Image
              src={item.image}
              width={380}
              height={100}
              alt={item.title}
              layout="responsive"
            />
          </div>
          <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="flex justify-between pb-4">
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>
           
              <a href="#" aria-label={`View details of ${item.title}`}>{item.title}</a>
            
            <p className="mb-4">{item.description}</p>
            <a href="/gallery" className="flex items-center" aria-label={`See details of ${item.title}`}>
              See details
              <TbArrowNarrowRight className="ml-2" />
            </a>
          </div>
          <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-0 hidden">
            <p className="tracking-wider -rotate-90">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
