import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "j.mohamedfidhran786@gmail.com",
      href: "mailto:j.mohamedfidhran786@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8973536009",
      href: "tel:+918973536009",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamedfidhran",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Fidhran2003",
      color: "hover:text-foreground",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:j.mohamedfidhran786@gmail.com",
      color: "hover:text-cyan",
    },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            I'm currently looking for new opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4 mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center card-hover glow-border group"
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-cyan to-purple mb-4">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="text-foreground font-medium text-sm group-hover:text-cyan transition-colors">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">Connect with me on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={`p-4 glass rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan/20 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:j.mohamedfidhran786@gmail.com">
                <Send className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
