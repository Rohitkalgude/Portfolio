import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleopen = () => {
    setOpen(!open);
  };

  const toogleclose = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 sm:px-10 py-4 sm:py-6 backdrop-blur-sm bg-transparent text-gray-300 text-lg sm:text-xl">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">MyPortfolio</div>

        <div className="sm:hidden text-3xl cursor-pointer" onClick={toggleopen}>
          {open ? <FiX /> : <FiMenu />}
        </div>

        <div className="hidden sm:flex gap-8">
          <NavLinks onClick={toogleclose} />
        </div>
      </div>

      {open && (
        <div className="flex flex-col items-center sm:hidden gap-6 mt-4">
          <NavLinks onClick={toogleclose} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }) {
  return (
    <>
      <Link
        to="home"
        smooth={true}
        duration={500}
        onClick={onClick}
        className="transition duration-300 hover:text-blue-400 hover:scale-105 cursor-pointer"
      >
        Home
      </Link>

      <Link
        to="about"
        smooth={true}
        duration={500}
        onClick={onClick}
        className="transition duration-300 hover:text-blue-400 hover:scale-105 cursor-pointer"
      >
        About
      </Link>

      <Link
        to="techstack"
        smooth={true}
        duration={500}
        onClick={onClick}
        className="transition duration-300 hover:text-blue-400 hover:scale-105 cursor-pointer"
      >
        Tech Stack
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        onClick={onClick}
        className="transition duration-300 hover:text-blue-400 hover:scale-105 cursor-pointer"
      >
        Projects
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        onClick={onClick}
        className="transition duration-300 hover:text-blue-400 hover:scale-105 cursor-pointer"
      >
        Contact
      </Link>
    </>
  );
}

export default Navbar;
