// import { Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Main from "./components/Main";

// function App() {
//   return (
//     <div className="w-full min-h-screen bg-zinc-900 text-white">
//       <Navbar />
//       <Home />
//       <About />
//       <Main/>
//       <Contact/>
//       <Footer/>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Main />
        <Contact />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
