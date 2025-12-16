import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  { name: "Core Java", level: 90 },
  { name: "Spring Boot", level: 85 },
  { name: "SQL / MySQL", level: 88 },
  { name: "HTML / CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "REST APIs", level: 85 },
  { name: "JPA / Hibernate", level: 80 },
];

const tools = ["Eclipse", "VS Code", "SQL Plus", "Git", "MySQL Workbench"];

const softSkills = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Creativity", icon: "💡" },
  { name: "Self Learner", icon: "📚" },
  { name: "Time Management", icon: "⏰" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Technical</span> Skills
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Programming & Frameworks</h3>
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: skill.level / 100 } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-8">
            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Tools & IDEs</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-cyan/10 transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="glass rounded-xl p-4 flex items-center gap-3 card-hover"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
