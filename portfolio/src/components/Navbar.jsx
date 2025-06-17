import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleOpen = () => setOpen(!open);
  const toggleClose = () => setOpen(false);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    toggleClose();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4 sm:py-6 backdrop-blur-sm bg-transparent text-gray-300 text-base sm:text-lg md:text-xl">
      <div className="flex justify-between items-center w-full max-w-screen-2xl mx-auto">
        {/* Title */}
        <div className="flex-shrink-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent drop-shadow-lg">
            Rohit Kalgude
          </h1>
        </div>

        {/* Mobile Toggle Icon */}
        <div className="sm:hidden text-3xl cursor-pointer" onClick={toggleOpen}>
          {open ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex space-x-6 md:space-x-10 lg:space-x-12 xl:space-x-14 2xl:space-x-18">
          <div className="relative group">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick("home")}
              className={`font-semibold cursor-pointer transition-colors duration-300 ${
                activeLink === "home"
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              Home
            </Link>
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                activeLink === "home" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>

          <div className="relative group">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick("about")}
              className={`font-semibold cursor-pointer transition-colors duration-300 ${
                activeLink === "about"
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              About
            </Link>
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                activeLink === "about" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>

          <div className="relative group">
            <Link
              to="main"
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick("main")}
              className={`font-semibold cursor-pointer transition-colors duration-300 ${
                activeLink === "main"
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              Portfolio
            </Link>
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                activeLink === "main" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>

          <div className="relative group">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick("contact")}
              className={`font-semibold cursor-pointer transition-colors duration-300 ${
                activeLink === "contact"
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              Contact
            </Link>
            <span
              className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                activeLink === "contact" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {open && (
        <div className="flex flex-col items-center sm:hidden gap-6 mt-5">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("home")}
            className={`text-base font-semibold transition-colors duration-300 ${
              activeLink === "home"
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("about")}
            className={`text-base font-semibold transition-colors duration-300 ${
              activeLink === "about"
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                : "text-white"
            }`}
          >
            About
          </Link>

          <Link
            to="main"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("main")}
            className={`text-base font-semibold transition-colors duration-300 ${
              activeLink === "main"
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                : "text-white"
            }`}
          >
            Main
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("contact")}
            className={`text-base font-semibold transition-colors duration-300 ${
              activeLink === "contact"
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
