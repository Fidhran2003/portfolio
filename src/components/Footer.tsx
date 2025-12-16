import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            © 2024 J Mohamed Fidhran. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Built with <Heart className="w-4 h-4 text-cyan fill-cyan" /> using React
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
