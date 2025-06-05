import image1 from "../assets/PayRoll.png";
import image2 from "../assets/Redux-Todo.png";
import image3 from "../assets/Myntra.png";
import image4 from "../assets/MEME.png";

function Projects() {
  const projectList = [
    {
      id: 1,
      image: image1,
      title: "Payroll Management",
      description: "A system to manage employee attendance, salary, and leave.",
      link: "https://github.com/Rohitkalgude/PayrollMenament",
      live: "",
    },
    {
      id: 2,
      image: image2,
      title: "Redux Todo App",
      description:
        "A simple task manager built with Redux for state management.",
      link: "https://github.com/Rohitkalgude/Redux-Todo",
      live: "",
    },
    {
      id: 3,
      image: image3,
      title: "Myntra Clone",
      description:
        "An e-commerce frontend clone of Myntra using React and Tailwind.",
      link: "https://github.com/Rohitkalgude/Myntra",
      live: "",
    },
    {
      id: 4,
      image: image4,
      title: "Meme Generator",
      description: "Create and share custom memes using this React-based app.",
      link: "https://github.com/Rohitkalgude/Meme-Generator",
      live: "",
    },
  ];

  return (
    <section id="projects" className="bg-zinc-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((proj) => (
            <div
              key={proj.id}
              className="border border-gray-700 rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <div className="flex gap-4">
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
      </div>
    </section>
  );
}

export default Projects;
