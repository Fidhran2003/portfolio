import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, BookOpen, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "internship",
    title: "Front-End Development Intern",
    organization: "Yale IT Skill Hub, Coimbatore",
    period: "August 2024",
    description: [
      "Worked on front-end development projects using web technologies",
      "Built responsive and user-friendly interfaces",
    ],
    icon: Briefcase,
  },
  {
    type: "training",
    title: "Full-Stack Java Development",
    organization: "QSpider, Chennai",
    period: "Present",
    description: [
      "Covered Java, HTML, CSS, JavaScript, SQL",
      "OOPS, DBMS, Collections, and Multithreading concepts",
    ],
    icon: BookOpen,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Internship & <span className="gradient-text">Training</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Professional experience and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass rounded-2xl p-6 sm:p-8 card-hover glow-border relative overflow-hidden group"
            >
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan/10 to-purple/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      exp.type === "internship"
                        ? "bg-cyan/20 text-cyan"
                        : "bg-purple/20 text-purple"
                    }`}
                  >
                    {exp.type === "internship" ? "Internship" : "Training"}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      exp.type === "internship"
                        ? "bg-gradient-to-br from-cyan to-blue"
                        : "bg-gradient-to-br from-purple to-cyan"
                    }`}
                  >
                    <exp.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3" />
                      {exp.organization}
                    </p>
                    <p className="text-muted-foreground text-sm flex items-center gap-1 mb-4">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-cyan mt-0.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
