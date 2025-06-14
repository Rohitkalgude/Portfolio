import { Link } from "react-scroll";
import heroImage from "../assets/1.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaProjectDiagram,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen w-full bg-zinc-900 text-white flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10"
    >
      <div
        className="max-w-7xl w-full flex flex-col-reverse md:flex-col-reverse lg:flex-row
        nesthub:flex-row nesthubmax:flex-row tab:flex-row zenbook:flex-row 
        items-center justify-between gap-10 lg:mt-8 mr-0 md:mr-60 "
      >
        <div className="text-left ml-5 lg:ml-28 space-y-5 flex-1">
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
              words={["Computer Science & Engg. Student"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
            Enhancing digital experiences that are smooth, scalable, and made to
            impress.
          </p>

          <div className="flex flex-wrap gap-3 justify-start">
            <div className="px-4 py-2 hidden sm:text-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
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

          <div className="flex gap-4">
            <div className="relative w-40 h-11 bg-gradient-to-r from-[#6366f1] to-[#a855f7] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-md text-gray-200 font-medium overflow-hidden transition-all duration-300 hover:bg-white/5">
              <FaProjectDiagram className="text-lg" />
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </div>
            <div className="relative w-40 h-11 bg-gradient-to-r from-[#6366f1] to-[#a855f7] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-md text-gray-200 font-medium overflow-hidden transition-all duration-300 hover:bg-white/5">
              <MdContactMail className="text-lg" />
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex gap-4 p-3">
            <a
              href="https://www.linkedin.com/in/rohit-kalgude-58aa41263"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#030014] backdrop-blur-xl p-3 flex items-center justify-center border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] hover:border-white/20 text-white text-xl transition-transform duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rohitkalgude/Rohit-Kalgude.git"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#030014] backdrop-blur-xl p-3 flex items-center justify-center border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] hover:border-white/20 text-white text-xl transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/kalgude_rohit?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#030014] backdrop-blur-xl p-3 flex items-center justify-center border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] hover:border-white/20 text-white text-xl transition-transform duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:-mr-80 items-center mb-6 lg:mb-10">
          <img
            src={heroImage}
            alt="hero"
            className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;



// import { Link } from "react-scroll";
// import heroImage from "../assets/1.png";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaTwitter,
//   FaProjectDiagram,
// } from "react-icons/fa";
// import { MdContactMail } from "react-icons/md";
// import { Typewriter } from "react-simple-typewriter";

// function Hero() {
//   return (
//     <div
//       id="home"
//       className="min-h-screen w-full bg-zinc-900 text-white flex lg:ml-30 px-4 sm:px-6 lg:px-10"
//     >
//       <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-10">
//         <div className="text-left space-y-5 flex-1 w-full">
//           <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
//             Full Stack
//             <br />
//             <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
//               Developer
//             </span>
//           </h1>

//           <h2 className="text-xl font-light">
//             <Typewriter
//               words={["Computer Science & Engg. Student"]}
//               loop={0}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </h2>

//           <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
//             Enhancing digital experiences that are smooth, scalable, and made to
//             impress.
//           </p>

//           {/* Tech Stack Badges */}
//           <div className="flex flex-wrap gap-3 justify-start">
//             {["React", "Node.js", "Express.js", "Next.js"].map((tech, i) => (
//               <div
//                 key={i}
//                 className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
//               >
//                 {tech}
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
//             <div className="w-full sm:w-40 h-11 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg border border-white/10 flex items-center justify-center gap-2 font-medium hover:bg-white/5 transition">
//               <FaProjectDiagram className="text-lg" />
//               <Link
//                 to="projects"
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer"
//               >
//                 Projects
//               </Link>
//             </div>

//             <div className="w-full sm:w-40 h-11 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg border border-white/10 flex items-center justify-center gap-2 font-medium hover:bg-white/5 transition">
//               <MdContactMail className="text-lg" />
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer"
//               >
//                 Contact Me
//               </Link>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-4 justify-start mt-4">
//             {[
//               {
//                 href: "https://www.linkedin.com/in/rohit-kalgude-58aa41263",
//                 icon: <FaLinkedin />,
//               },
//               {
//                 href: "https://github.com/Rohitkalgude/Rohit-Kalgude.git",
//                 icon: <FaGithub />,
//               },
//               {
//                 href: "https://x.com/kalgude_rohit?s=09",
//                 icon: <FaTwitter />,
//               },
//             ].map((item, i) => (
//               <a
//                 key={i}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-xl bg-[#030014] p-3 flex items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)] hover:border-white/20 text-white text-xl"
//               >
//                 {item.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="hidden md:block items-center mb-6 lg:mb-10 absolute right-52 pl-4 sm:pl-6 lg:pl-10">
//           <img
//             src={heroImage}
//             alt="hero"
//             className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[600px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
