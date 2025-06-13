import { useState } from "react";
import image1 from "../assets/HackerRank_page.jpg";
import image2 from "../assets/MEME_page.jpg";
import image3 from "../assets/Talwindcss_page.jpg";
import image4 from "../assets/develpment.jpg";
import image5 from "../assets/java_page.jpg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const certificates = [
  { id: 1, image: image1, title: "HackerRank Certificate" },
  { id: 2, image: image2, title: "Meme Generator Project" },
  { id: 3, image: image3, title: "Tailwind CSS Completion" },
  { id: 4, image: image4, title: "Frontend Development" },
  { id: 5, image: image5, title: "Java Basics" },
];

function Certificates() {
  const [clickimage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section className="text-white px-4 sm:px-6 py-16 sm:py-20 -ml-0 sm:-ml-28 sm:w-[87rem]">
      <div className="max-w-9xl mx-auto -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {visibleCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1e1e2f] p-3 sm:p-4 rounded-xl border border-white/10 shadow-md hover:shadow-purple-500/30 transition-all duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 sm:h-80 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(cert.image)}
              />

              <h3 className="text-base sm:text-lg font-semibold text-center mt-2">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {certificates.length > 3 && (
        <div className="mt-6 text-center sm:text-left">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 text-sm font-semibold rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition"
          >
            {showAll ? (
              <>
                Less <FiChevronUp size={18} />
              </>
            ) : (
              <>
                Show All <FiChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      )}

      {clickimage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-[90vw] sm:max-w-[60vw] max-h-[80vh]">
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
