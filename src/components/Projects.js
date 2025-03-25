import Link from "next/link";
export default function Projects() {
    const projects = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive portfolio built with Next.js & Tailwind CSS.",
        image: "/project3.png",
        link: "/project1",
        tech: ["Next.js", "Tailwind CSS"],
      },
      {
        id: 2,
        title: "WebSMK Negeri 1 Denpasar",
        description: "An informative school website built with HTML & CSS.",
        image: "/project1.png",
        link: "/project2",
        tech: ["HTML", "CSS"],
      },
      {
        id: 3,
        title: "UI APK Online Shopping",
        description: "Prototype online shopping platform built with FlutterFlow.",
        image: "/project2.png",
        link: "/project3",
        tech: ["FlutterFlow"],
      },
    ];
  
    return (
      <div className="  text-white w-full">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-8 mt-20">
          My Projects 🚀
        </h2>
        <div className="grid md:grid-cols-1  lg:grid-cols-3 gap-8 max-w-full mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    );
  }
  
  function ProjectCard({ title, description, image, link, tech }) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full md:w-[600px] lg:w-[400px]">
        <div className="relative group">
          {/* Gambar Project */}
          <img
            src={image}
            alt={title}
            className="w-full h-[300px] object-cover"
          />
  
          {/* Label Teknologi */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
            <span className="text-white text-sm font-semibold bg-gray-700 px-3 py-1 rounded-md">
              {tech.join(" • ")}
            </span>
          </div>
        </div>
  
        {/* Konten Deskripsi */}
        <div className="p-5">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
          <Link
            href={link}
            rel="noopener noreferrer"
            className="text-blue-400 mt-3 inline-block hover:underline"
          >
            View more →
          </Link>
        </div>
      </div>
    );
  }
  