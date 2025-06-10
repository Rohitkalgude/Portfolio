import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleopen = () => {
    setOpen(!open);
  };

  const toogleclose = () => {
    setOpen(false);
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
    toogleclose();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 sm:px-10 py-4 sm:py-6 backdrop-blur-sm bg-transparent text-gray-300 text-lg sm:text-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex-shrink-0 -ml-30">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent drop-shadow-lg">
            Rohit Kalgude
          </h1>
        </div>

        <div className="sm:hidden text-3xl cursor-pointer" onClick={toggleopen}>
          {open ? <FiX /> : <FiMenu />}
        </div>

        <div className="text-sm hidden sm:flex space-x-8 -mr-28">
          <NavLinks activeLink={activeLink} onClick={handleLinkClick} />
        </div>
      </div>

      {open && (
        <div className="flex flex-col items-center sm:hidden gap-6 mt-4">
          <NavLinks activeLink={activeLink} onClick={handleLinkClick} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ activeLink, onClick }) {
  return (
    <>
      {/* Remove ml-8 from container to prevent left margin on mobile */}
      <div className="flex items-center space-x-8 relative">
        <div className="relative group">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => onClick("home")}
            className={`z-10 transition-colors duration-300 font-semibold cursor-pointer ${
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
            onClick={() => onClick("about")}
            className={`z-10 transition-colors duration-300 font-semibold cursor-pointer ${
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
            onClick={() => onClick("main")}
            className={`z-10 transition-colors duration-300 font-semibold cursor-pointer ${
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
            onClick={() => onClick("contact")}
            className={`z-10 transition-colors duration-300 font-semibold cursor-pointer ${
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
    </>
  );
}

export default Navbar;
