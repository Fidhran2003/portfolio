import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Results-driven <span className="text-cyan font-medium">B.E Computer Science Engineering</span> graduate 
              skilled in Java, SQL, HTML, CSS, and web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hands-on experience in building applications using{" "}
              <span className="text-cyan font-medium">JDBC, Servlets, JSP, MySQL, and Spring Boot</span>. 
              Strong in problem-solving, clean coding practices, and eager to start a career as a software engineer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently expanding my expertise in{" "}
              <span className="text-cyan font-medium">Full-Stack Java Development</span> at QSpider, Chennai, 
              covering advanced concepts in Java, OOPS, DBMS, Collections, and Multithreading.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "CGPA", value: "7.9/10", desc: "Anna University" },
              { label: "HSC", value: "82%", desc: "A.V.M.S School" },
              { label: "Projects", value: "2+", desc: "Completed" },
              { label: "Languages", value: "2", desc: "English & Tamil" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center card-hover glow-border"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{item.value}</div>
                <div className="text-foreground font-medium">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
