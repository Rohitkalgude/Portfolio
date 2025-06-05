import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Socials/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
