function About() {
  return (
    <section
      id="about"
      className="text-white px-6 py-20 flex justify-center bg-zinc-900"
    >
      <div className="max-w-4xl w-full text-left">
        <h2 className="text-4xl font-bold mb-6 text-center sm:text-left">
          About Me
        </h2>

        <p className="text-lg sm:text-2xl leading-relaxed">
          Hi, I'm <strong>Rohit Kalgude</strong>, an enthusiastic frontend
          developer from Surat. I’m currently focused on crafting clean,
          user-centric web applications using modern technologies. Over the past
          few years, I’ve immersed myself in web development, gaining solid
          proficiency in <strong>HTML</strong>, <strong>CSS</strong>,
          <strong>JavaScript</strong>, and <strong>React.js</strong>. I’ve
          worked on numerous personal and professional projects, and have a keen
          interest in designing aesthetically pleasing and accessible
          interfaces. I'm committed to continuous learning and excited to apply
          my skills to impactful projects and real-world challenges.
        </p>

        <a href="#contact">
          <div className="flex justify-center sm:justify-start">
            <button className="mt-8 px-6 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition font-semibold">
              CONTACT
            </button>
          </div>
        </a>
      </div>
    </section>
  );
}

export default About;
