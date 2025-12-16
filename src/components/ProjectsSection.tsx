import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Database, Server, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Order Management System",
    description:
      "Developed a Spring Boot–based e-commerce backend application using RESTful APIs. Implemented role-based user management, product catalog, cart, order processing, and payment handling.",
    details: [
      "Designed and integrated MySQL database using Spring Data JPA with proper entity relationships",
      "Followed clean layered architecture with DTO-based request/response handling",
      "Centralized exception management for robust error handling",
    ],
    techStack: ["Java", "Spring Boot", "REST API", "MySQL", "JPA"],
    icon: ShoppingCart,
    color: "from-cyan to-blue",
  },
  {
    title: "Student Management System",
    description:
      "Developed a console-based application for managing student records using Java and JDBC. Implemented complete CRUD operations including add, update, delete, and retrieve student data.",
    details: [
      "Used PreparedStatement for secure and efficient database access",
      "Built a reusable JDBC connection layer",
      "Clean console-based UI for user interactions",
    ],
    techStack: ["Java", "JDBC", "MySQL"],
    icon: Users,
    color: "from-purple to-cyan",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Some of the projects I've built
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="glass rounded-2xl p-6 sm:p-8 card-hover glow-border overflow-hidden relative group"
            >
              {/* Background gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-cyan mt-1">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium bg-secondary rounded-full text-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
