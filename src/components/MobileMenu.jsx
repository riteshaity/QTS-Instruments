import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { services } from "../data/services";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function MobileMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-ink-950 text-white flex flex-col md:hidden"
    >
      <div className="flex items-center justify-end h-20 px-5">
        <button
          onClick={onClose}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      <motion.nav
        className="flex-1 flex flex-col items-center justify-center gap-7 overflow-y-auto py-10 font-display text-4xl italic"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.to}
            onClick={onClose}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="hover:text-brand transition-colors"
          >
            {link.label}
          </motion.a>
        ))}

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="w-16 h-px bg-white/20"
        />

        {services.map((service) => (
          <motion.div
            key={service.slug}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <Link
              to={`/${service.slug}`}
              onClick={onClose}
              className="font-sans text-base not-italic text-white/60 hover:text-brand transition-colors"
            >
              {service.title}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
}
