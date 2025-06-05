import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6 bg-neutral-800 py-14 px-6 rounded-lg -ml-1">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:your@email.com"
          className="text-gray-300 hover:text-blue-400 transition text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </>
  );
}

export default SocialLinks;
