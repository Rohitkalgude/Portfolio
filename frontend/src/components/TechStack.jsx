import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  // SiVisualstudiocode,
  // SiPostman,
} from "react-icons/si";

const stacks = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "Express", icon: <SiExpress />, color: "text-white" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
  { name: "NPM", icon: <FaNpm />, color: "text-red-600" },
  // Add more tools here if needed
];

function Techstack() {
  return (
    <div id="techstack" className="py-16 text-white px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Tech Stack</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {stacks.map((stack, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center space-y-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`text-6xl ${stack.color}`}>{stack.icon}</div>
            <p className="text-lg font-medium">{stack.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
