import image1 from "../assets/PayRoll.png";
import image2 from "../assets/Redux-Todo.png";
import image3 from "../assets/Myntra.png";
import image4 from "../assets/MEME.png";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projectList = [
    {
      id: 1,
      image: image1,
      title: "Payroll Management",
      description: "A system to manage employee attendance, salary, and leave.",
      link: "https://github.com/Rohitkalgude/PayrollMenament",
      technology: "React, MongoDB, Express, Node.js",
      live: "",
    },
    {
      id: 2,
      image: image2,
      title: "Redux Todo App",
      description: "A simple task manager built with Redux for state management.",
      link: "https://github.com/Rohitkalgude/Redux-Todo",
      technology: "React.js, Tailwind CSS, Redux Toolkit",
      live: "",
    },
    {
      id: 3,
      image: image3,
      title: "Myntra Clone",
      description: "An e-commerce frontend clone of Myntra using React and Tailwind.",
      link: "https://github.com/Rohitkalgude/Myntra",
      technology: "HTML, CSS",
      live: "",
    },
    {
      id: 4,
      image: image4,
      title: "Meme Generator",
      description: "Create and share custom memes using this React-based app.",
      link: "https://github.com/Rohitkalgude/Meme-Generator",
      technology: "React, Tailwind CSS",
      live: "https://meme-generator-three-liart.vercel.app/",
    },
  ];

  const visibleproject = showAll ? projectList : projectList.slice(0, 3);

  return (
    <section id="projects" className="text-white px-4 sm:px-6 py-16 sm:py-20 -mt-8">
      <div className="w-full max-w-[87rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleproject.map((proj) => (
            <div
              key={proj.id}
              className="border border-white/10 rounded-2xl p-4 sm:p-6 bg-[#1a1a2b] transition-all duration-300 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)]"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">{proj.description}</p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-white uppercase">
                  Tech Stack:
                </span>
                <p className="text-gray-400 text-sm mt-1">{proj.technology}</p>
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {projectList.length > 3 && (
          <div className="mt-6 text-center sm:text-left">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 text-sm font-semibold rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition"
            >
              {showAll ? (
                <>
                  Less <FiChevronUp size={18} />
                </>
              ) : (
                <>
                  Show All Projects <FiChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
