import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    institution: "Anna University",
    period: "2021 – 2025",
    grade: "CGPA: 7.9 / 10",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science Stream",
    institution: "A.V.M.S Matric Higher Secondary School, Ramanathapuram",
    period: "2020 – 2021",
    grade: "Percentage: 82%",
    icon: Award,
  },
  {
    degree: "Secondary School (SSLC)",
    field: "",
    institution: "M.G Matric Higher Secondary School, Ramanathapuram",
    period: "2018 – 2019",
    grade: "",
    icon: Award,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            My academic journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-cyan rounded-full lg:-translate-x-1/2 shadow-lg shadow-cyan/50" />

                {/* Content */}
                <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 card-hover glow-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan to-purple">
                        <edu.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        {edu.field && (
                          <p className="text-cyan font-medium text-sm mb-2">{edu.field}</p>
                        )}
                        <p className="text-muted-foreground text-sm mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {edu.period}
                          </span>
                          {edu.grade && (
                            <span className="px-2 py-1 bg-cyan/10 text-cyan rounded-full font-medium">
                              {edu.grade}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
