import * as motion from "motion/react-client";
import SkillCard from "./ui/SkillCard";
import { SOFT_SKILLS } from "../constants";
import { Code2, Sparkles, Zap, Shield } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in building end-to-end solutions with React, Node.js, and modern frameworks",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Obsessed with creating lightning-fast, optimized user experiences",
    },
    {
      icon: Sparkles,
      title: "Modern UI/UX",
      description: "Crafting beautiful, accessible interfaces that users love",
    },
    {
      icon: Shield,
      title: "Best Practices",
      description: "Writing clean, maintainable code with comprehensive testing",
    },
  ];

  return (
    <section id="about" className="py-32 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="text-sm text-violet-400">About Me</span>
          </div>
          <h2 className="text-5xl mb-6">Turning ideas into reality</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software developer with 5+ years of experience building scalable web applications.
            I specialize in creating seamless user experiences backed by robust, performant code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
