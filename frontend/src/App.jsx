import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
