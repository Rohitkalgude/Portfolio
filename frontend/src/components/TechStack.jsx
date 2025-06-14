import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const tech = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
];

function TechStack() {
  return (
    <section
      id="techstack"
      className="text-white px-4 sm:px-6 py-12 sm:py-20 -ml-0 sm:-ml-28 sm:w-[87rem] mt-[-20px] sm:mt-0 lg:-mt-10"
    >
      <div className="max-w-9xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        ></motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-8">
          {tech.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className="flex flex-col items-center justify-center p-4 sm:p-6 bg-[#1e1e2f] rounded-2xl shadow-lg border border-white/10 transition-all hover:shadow-purple-500/30"
            >
              <motion.div
                animate={
                  name === "React"
                    ? { rotate: [0, 360] }
                    : { scale: [1, 1.05, 1] }
                }
                transition={{
                  repeat: Infinity,
                  duration: name === "React" ? 5 : 3,
                  ease: "linear",
                }}
              >
                <Icon size={40} sm:size={50} color={color} />
              </motion.div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-center">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
