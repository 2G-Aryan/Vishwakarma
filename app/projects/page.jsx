
// import { usePathname } from "next/navigation"
import Image from "next/image";

// const links = [
//   { path: '/', name: 'home' },
//   { path: '/', name: 'about' },
//   { path: '/', name: 'gallery' },
//   { path: '/', name: 'projects' },
//   { path: '/', name: 'contact' }
// ]


const projects = [
  {
    id: 1,
    name: "Click Here",
    description: "",
    image: "/images/pro1.jpeg",
    link: "/project1",
  },
  // {
  //   id: 2,
  //   name: "Drawing room",
  //   description: "xyz",
  //   image: "/image/project2.jpg",
  //   link: "",
  // },
  // {
  //   id: 3,
  //   name: "Drawing room",
  //   description: "xyz",
  //   image: "/image/project2.jpg",
  //   link: "",
  // },
];

const Page = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-cover bg-center">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white text-center">
          Our Project
        </h1>
      </div>

      {/* Projects Section */}
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            {/* Project Image */}
            <div>
              {project.link ? (
              
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image}
                    width={480}
                    height={380}
                    alt={project.name}
                    className="w-full"
                    priority
                  />
                </a>
              ) : (
                <Image
                  src={project.image}
                  width={480}
                  height={380}
                  alt={project.name}
                  className="w-full"
                  priority
                />
              )}
            </div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white flex flex-col items-center justify-end w-full p-6 text-xl transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
  <h1 className="text-2xl font-semibold">{project.name}</h1>
  <p className="py-4">{project.description}</p>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
