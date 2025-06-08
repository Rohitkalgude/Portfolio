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
  return (
    <section className="bg-zinc-900 text-white px-10 py-30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1e1e2f] p-4 rounded-xl border border-white/10 shadow-md hover:shadow-purple-500/30 transition-all duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-center">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
