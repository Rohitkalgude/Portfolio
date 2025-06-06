import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-6 px-4 mt-10 border-t border-zinc-700 hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © 2025 Rohit Kalgude. All rights reserved.
        </p>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/rohit-kalgude-58aa41263"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Rohitkalgude/Rohit-Kalgude.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/kalgude_rohit?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
