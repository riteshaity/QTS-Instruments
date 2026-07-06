import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { services } from "../data/services";

export default function MobileMenu({ onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);

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
        <motion.a
          href="/"
          onClick={onClose}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="hover:text-brand transition-colors"
        >
          Home
        </motion.a>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="flex flex-col items-center"
        >
          <button
            onClick={() => setServicesOpen((v) => !v)}
            className="flex items-center gap-2 hover:text-brand transition-colors"
          >
            Calibration Service
            <ChevronDown
              size={22}
              strokeWidth={2.5}
              className={`not-italic transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {servicesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col items-center gap-4 pt-5">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}`}
                      onClick={onClose}
                      className="font-sans text-base not-italic text-white/60 hover:text-brand transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.a
          href="/#about"
          onClick={onClose}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="hover:text-brand transition-colors"
        >
          About
        </motion.a>
        <motion.a
          href="/#contact"
          onClick={onClose}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="hover:text-brand transition-colors"
        >
          Contact
        </motion.a>
      </motion.nav>
    </motion.div>
  );
}
