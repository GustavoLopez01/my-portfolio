import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      description: "Leading development of enterprise SaaS platform serving 10K+ users. Architected microservices infrastructure and improved performance by 40%.",
    },
    {
      year: "2021 - 2023",
      role: "Full-Stack Developer",
      company: "StartupXYZ",
      description: "Built core features for fintech application. Implemented real-time data synchronization and payment processing systems.",
    },
    {
      year: "2019 - 2021",
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      description: "Developed responsive web applications for Fortune 500 clients. Specialized in React and modern JavaScript frameworks.",
    },
  ];
  return (
    <section id="experience" className="py-32 px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-sm text-cyan-400">Career</span>
          </div>
          <h2 className="text-5xl mb-6">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/50 to-violet-500/50"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 ring-4 ring-background"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-4">
                      {exp.year}
                    </div>
                    <h3 className="text-xl mb-2">{exp.role}</h3>
                    <h4 className="text-lg text-cyan-400 mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
