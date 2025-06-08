import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const tech = [
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
];

function TechStack() {
  return (
    <section
      id="techstack"
      className="min-h-[60vh] flex flex-col items-center justify-center bg-zinc-900 text-white px-4 py-20"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {tech.map(({ name, icon: Icon, color }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-6 bg-[#1e1e2f] rounded-2xl shadow-lg border border-white/10 transition-all"
          >
            <Icon size={50} color={color} />
            <p className="mt-4 text-lg font-medium">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
