import { Link } from "react-scroll";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-900 text-white"
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

        <div className="mt-10">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block mt-3 px-8 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition font-semibold text-lg sm:text-2xl cursor-pointer"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
