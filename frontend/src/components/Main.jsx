import { useState } from "react";
import Projects from "./Projects";
import Certificates from "./Certificates";
import TechStack from "./TechStack";
import { Code2, BadgeCheck, Atom } from "lucide-react";

function Main() {
  const [active, setActive] = useState("projects");

  const sections = [
    { key: "projects", label: "Projects", icon: <Code2 size={24} /> },
    { key: "certificates", label: "Certificates", icon: <BadgeCheck size={24} /> },
    { key: "techstack", label: "Tech Stack", icon: <Atom size={24} /> },
  ];

  return (
    <section id="main" className="text-white min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>

        {/* Desktop Layout (sm and above) */}
        <div className="hidden sm:flex justify-between ml-0 md:-ml-28 px-12 py-4 rounded-xl border border-white/10 w-full md:w-[87rem]">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActive(section.key)}
              className={`w-full sm:w-[350px] flex items-center justify-center gap-3 px-7 py-5 text-lg sm:text-xl rounded-2xl border font-semibold transition-all duration-300 ${
                active === section.key
                  ? "bg-gradient-to-br from-purple-500 to-purple-700 text-white"
                  : "bg-transparent border-transparent hover:bg-white/5"
              }`}
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Layout (visible only below sm) */}
        <div className="sm:hidden grid grid-cols-3 gap-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-2 mb-6">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActive(section.key)}
              className={`flex flex-col items-center justify-center px-3 py-3 text-xs rounded-xl font-medium transition-all duration-300 ${
                active === section.key
                  ? "bg-gradient-to-br from-purple-500 to-purple-700 text-white"
                  : "text-gray-300 hover:bg-white/10"
              }`}
            >
              <div className="mb-1">{section.icon}</div>
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        {/* Section Rendering */}
        <div>
          {active === "projects" && <Projects />}
          {active === "certificates" && <Certificates />}
          {active === "techstack" && <TechStack />}
        </div>
      </div>
    </section>
  );
}

export default Main;
