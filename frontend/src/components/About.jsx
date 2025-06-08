import { Link } from "react-scroll";
import { FaProjectDiagram, FaDownload } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import Card from "./StatCard";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-900 text-white mr-64"
    >
      <div className="max-w-6xl w-full text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
          About Me
        </h2>
        <p className="text-lg sm:text-2xl leading-relaxed text-gray-300">
          Hi, I'm <strong className="text-white">Rohit Kalgude</strong>, an
          enthusiastic frontend developer from Surat. I’m currently focused on
          crafting clean, user-centric web applications using modern
          technologies. Over the past few years, I’ve immersed myself in web
          development, gaining solid proficiency in
          <strong className="text-white">
            HTML, CSS, JavaScript,
          </strong> and <strong className="text-white">React.js</strong>. I’ve
          worked on numerous personal and professional projects, and have a keen
          interest in designing aesthetically pleasing and accessible
          interfaces. I'm committed to continuous learning and excited to apply
          my skills to impactful projects and real-world challenges.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
          <a
            href="/Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-white font-medium"
          >
            <FaDownload />
            Download Resume
          </a>

          <div className="relative w-40 h-11 bg-gradient-to-r from-[#6366f1] to-[#a855f7] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-md text-gray-200 font-medium overflow-hidden transition-all duration-300 hover:bg-white/5">
            <FaProjectDiagram className="text-lg" />
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all duration-300"
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-72 mt-14 w-full max-w-8xl">
          <Link to="projects" smooth={true} duration={500}>
            <Card
              icon={FiCode}
              title="Total Projects"
              value="4"
              description="Innovative web & mobile solutions crafted"
            />
          </Link>

          <Link to="projects" smooth={true} duration={500}>
            <Card
              icon={PiCertificateBold}
              title="Certificates"
              value="3"
              description="Professional skills validated"
            />
          </Link>

          <Link to="projects" smooth={true} duration={500}>
            <Card
              icon={FaGlobe}
              title="Years of Experience"
              value="2"
              description="Continuous learning journey"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
