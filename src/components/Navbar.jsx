import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ArrowUpRight, Thermometer, Droplets, Warehouse } from "lucide-react";
import logoFull from "../assets/logo-full.svg";
import logoMark from "../assets/logo-mark.svg";
import { services } from "../data/services";
import MobileMenu from "./MobileMenu";

const icons = { Thermometer, Droplets, Warehouse };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-40 px-4 sm:top-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-ink-950/8 bg-white/75 py-2 pl-4 pr-2 backdrop-blur-xl transition-shadow duration-300 sm:pl-6 sm:pr-2.5 ${
            scrolled ? "shadow-card" : "shadow-soft"
          }`}
        >
          <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
            <img src={logoFull} alt="QTS Instruments" className="hidden h-7 sm:block" />
            <img src={logoMark} alt="QTS Instruments" className="h-9 sm:hidden" />
          </Link>

          <div className="hidden items-center gap-1 text-sm font-medium text-ink-900/80 md:flex">
            <NavLink to="/" className="rounded-full px-4 py-2 transition-colors hover:bg-ink-950/5 hover:text-ink-950">
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:bg-ink-950/5 hover:text-ink-950">
                Calibration Service
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div className="fixed left-1/2 top-[4.75rem] z-40 w-full max-w-7xl -translate-x-1/2 px-4 sm:top-[5.25rem] sm:px-6 lg:px-8">
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-3 gap-5 rounded-[28px] border border-ink-950/5 bg-white p-6 shadow-card"
                    >
                      {services.map((service) => {
                        const Icon = icons[service.icon] ?? Thermometer;
                        return (
                          <Link
                            key={service.slug}
                            to={`/${service.slug}`}
                            className="group duotone-teal relative flex min-h-[19rem] flex-col justify-end overflow-hidden rounded-3xl"
                          >
                            <img
                              src={service.image}
                              alt={service.title}
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
                            <div className="relative z-10 p-6">
                              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-brand-light backdrop-blur">
                                <Icon size={18} />
                              </div>
                              <p className="font-semibold text-white">{service.title}</p>
                              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/60">
                                {service.summary}
                              </p>
                              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-light">
                                View service
                                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <a href="/#about" className="rounded-full px-4 py-2 transition-colors hover:bg-ink-950/5 hover:text-ink-950">
              About
            </a>
            <a href="/#contact" className="rounded-full px-4 py-2 transition-colors hover:bg-ink-950/5 hover:text-ink-950">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              Get a Quote
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-ink-950/30 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>{mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </>
  );
}
