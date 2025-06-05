import { Link } from "react-router-dom";
import heroImage from "../assets/1.png";

function Hero() {
  return (
    <div
      id="home"
      className="h-screen w-full bg-zinc-900 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left space-y-5">
          <p className="text-3xl sm:text-4xl">Hi,</p>
          <p className="text-3xl sm:text-4xl">My name is</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-900">
            Rohit Kalgude
          </h1>
          <p className="text-3xl sm:text-4xl">I develop things for web!</p>

          <a href="#contact">
            <button className="mt-6 px-8 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition font-semibold text-lg sm:text-xl">
              CONTACT ME
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="hidden md:block mb-10 lg:mb-0">
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
