import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import fidhranPhoto from "@/assets/fidhran-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="photo-glow">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-secondary">
                <img
                  src={fidhranPhoto}
                  alt="J Mohamed Fidhran"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-cyan font-mono text-sm sm:text-base mb-2">Hello, I'm</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">J Mohamed</span>{" "}
              <span className="text-foreground">Fidhran</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6"
            >
              Java Developer / Full-Stack Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground mb-8"
            >
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-cyan" />
                Chennai, India
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-cyan" />
                j.mohamedfidhran786@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-cyan" />
                8973536009
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <a
                href="https://www.linkedin.com/in/mohamedfidhran"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-cyan/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Fidhran2003"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-cyan/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:j.mohamedfidhran786@gmail.com"
                className="p-3 rounded-full glass hover:bg-cyan/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
