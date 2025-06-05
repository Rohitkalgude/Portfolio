import image1 from "../assets/my-socials.png";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="relative w-full">
      {/* Fixed Social Icons (Desktop Only) */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6 bg-[#65656B1B] py-14 px-6 rounded-lg -ml-1">
        <a
          href="https://www.linkedin.com/in/rohit-kalgude-58aa41263"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Rohitkalgude/Rohit-Kalgude.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/kalgude_rohit?s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:rohitkalgude860@gmail.com"
          className="text-gray-300 hover:text-blue-400 transition text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden block mt-10 text-center space-y-4">
      <img src={image1} alt="social" className="mx-auto w-[250px]" />
        <div className="flex justify-center gap-6 text-2xl text-gray-300">
          <a
            href="https://www.linkedin.com/in/rohit-kalgude-58aa41263"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rohitkalgude007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/kalgude_rohit?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:rohitkalgude860@gmail.com"
            className="hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </div>
  );
}

export default SocialLinks;
