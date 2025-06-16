import { Link } from "react-scroll";
import { FaProjectDiagram, FaDownload, FaGlobe } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";
import Card from "./StatCard";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-2 pt-20 lg:mt-4 text-white flex items-center justify-center"
    >
      <div className="max-w-6xl  w-full text-left lg:text-center sm:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center sm:text-center">About Me</h2>
        {/* Description */}
        <p className="text-lg sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto text-left sm:text-left">
          Hi, I'm
          <span className="text-white font-semibold">Rohit Kalgude</span>, a
          passionate frontend developer from Surat. I enjoy building clean,
          responsive, and accessible web applications. Over time, I’ve developed
          strong skills in{" "}
          <span className="text-white font-semibold">
            HTML, CSS, JavaScript,
          </span>{" "}
          and
          <span className="text-white font-semibold">React.js</span>. I love
          solving real-world problems through code and continuously expanding my
          knowledge in modern web technologies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-white font-medium w-full sm:w-auto justify-center"
          >
            <FaDownload />
            Download Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg border border-white/10 text-white hover:opacity-90 transition w-full sm:w-auto justify-center"
          >
            <FaProjectDiagram />
            View Projects
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-40 ml-0 lg:-ml-28 mt-16">
          <Link to="main" smooth={true} duration={500}>
            <Card
              icon={FiCode}
              title="Total Projects"
              value="4"
              description="Innovative web & mobile solutions"
            />
          </Link>

          <Link to="main" smooth={true} duration={500}>
            <Card
              icon={PiCertificateBold}
              title="Certificates"
              value="5"
              description="Validated technical expertise"
            />
          </Link>

          <Link to="main" smooth={true} duration={500}>
            <Card
              icon={FaGlobe}
              title="Years of Experience"
              value="3"
              description="Building and growing daily"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
