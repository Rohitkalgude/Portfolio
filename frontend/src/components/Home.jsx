import { Link } from "react-scroll";
import heroImage from "../assets/1.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div
      id="home"
      className="h-screen w-full bg-zinc-900 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left space-y-5">
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <span className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              Full Stack
            </span>
            <br />
            <span className="relative inline-block mt-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <h1 style={{ fontFamily: "sans-serif", fontSize: "1.5rem" }}>
            <Typewriter
              words={[
                "Computer Science & Engg. Student",
              ]}
              loop={0} 
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed font-light aos-init aos-animate">
            Enhancing digital experiences that are smooth, scalable, and made to
            impress.
          </p>

          <div className="flex flex-wrap gap-3 justify-start aos-init aos-animate">
            <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
              React
            </div>
            <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
              Node.js
            </div>
            <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
              Express.js
            </div>
            <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
              Next.js
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="relative w-40 h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm text-gray-200 font-medium overflow-hidden transition-all duration-300 hover:bg-white/5">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all duration-300"
              >
                Projects
              </Link>
            </div>

            <div className="relative w-40 h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm text-gray-200 font-medium overflow-hidden transition-all duration-300 hover:bg-white/5">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex gap-4 p-3">
            <a
              href="https://www.linkedin.com/in/rohit-kalgude-58aa41263"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#030014] backdrop-blur-xl p-3 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 text-white text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rohitkalgude007"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#030014] backdrop-blur-xl p-3 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 text-white text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/kalgude_rohit?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#030014] backdrop-blur-xl p-3 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 text-white text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="hidden md:block mb-10 lg:mb-10 mr-10">
          <img
            src={heroImage}
            alt="hero"
            className="w-64 sm:w-80 md:w-96 lg:w-[420px] xl:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
