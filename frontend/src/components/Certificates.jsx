import { useState } from "react";
import image1 from "../assets/HackerRank_page.jpg";
import image2 from "../assets/MEME_page.jpg";
import image3 from "../assets/Talwindcss_page.jpg";
import image4 from "../assets/develpment.jpg";
import image5 from "../assets/java_page.jpg";

const certificates = [
  { id: 1, image: image1, title: "HackerRank Certificate" },
  { id: 2, image: image2, title: "Meme Generator Project" },
  { id: 3, image: image3, title: "Tailwind CSS Completion" },
  { id: 4, image: image4, title: "Frontend Development" },
  { id: 5, image: image5, title: "Java Basics" },
];

function Certificates() {
  const [clickimage, setSelectedImage] = useState(null);

  return (
    <section className="bg-zinc-900 text-white px-6 py-20 -ml-28 md:w-[87rem]">
      <div className="max-w-9xl mx-auto -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1e1e2f] p-4 rounded-xl border border-white/10 shadow-md hover:shadow-purple-500/30 transition-all duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-80 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(cert.image)}
              />

              <h3 className="text-lg font-semibold text-center">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {clickimage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-[60vw] max-h-[80vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-zinc-700 hover:bg-red-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-50"
              aria-label="Close Image"
            >
              <span className="text-2xl font-bold leading-none select-none">
                &times;
              </span>
            </button>

            <img
              src={clickimage}
              alt="certification"
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
