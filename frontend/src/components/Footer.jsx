import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-6 px-4 mt-10 border-t border-zinc-700 hidden md:block">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-md text-center md:text-center">
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
