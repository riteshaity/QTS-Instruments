import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, MapPin } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import thermalPhoto from "../assets/thermal.jpg";
import { StaggerGroup, StaggerItem } from "./RevealOnScroll";

const metaPills = [
  { icon: BadgeCheck, label: "NABL Accredited" },
  { icon: ShieldCheck, label: "ISO/IEC 17025" },
  { icon: MapPin, label: "Hyderabad, India" },
];

const trustCards = [
  {
    icon: BadgeCheck,
    title: "NABL Accredited Laboratory",
    body: "Independently accredited for calibration competence since 2020.",
  },
  {
    icon: ShieldCheck,
    title: "ISO/IEC 17025 Procedures",
    body: "Traceable, audit-ready certificates for every calibration we issue.",
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    body: "On-site calibration and mapping wherever your facility is.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="bg-cream px-4 pb-8 pt-28 sm:px-6 sm:pb-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-noise relative overflow-hidden rounded-[32px] bg-ink-950 shadow-card">
          <div className="absolute inset-0 bg-dot-pattern bg-dots opacity-[0.08]" />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-10 lg:p-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50"
              >
                Calibration &middot; Validation &middot; Monitoring
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-[2.85rem] lg:text-[3.1rem]"
              >
                <span className="block">Calibration, Validation &amp;</span>
                <span className="block">Temperature Monitoring</span>
                <span className="mt-1 block font-display font-medium italic text-brand-light">
                  made simple.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-6 max-w-md text-base leading-relaxed text-white/50"
              >
                A Hyderabad-based, NABL accredited calibration laboratory serving customers
                pan-India with precision temperature, humidity, and thermal mapping calibration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-7 flex flex-wrap gap-2.5"
              >
                {metaPills.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white/60"
                  >
                    <Icon size={13} className="text-brand-light" />
                    {label}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="mt-9 flex flex-wrap items-center gap-5"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Claim a Quote
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#feature"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  See our services
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <img src={heroBg} alt="QTS Instruments calibration environment" className="h-64 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl border border-white/10 bg-ink-900/90 p-4 shadow-soft backdrop-blur sm:block"
              >
                <img src={thermalPhoto} alt="Instrument calibration in progress" className="h-20 w-full rounded-lg object-cover" />
                <p className="mt-2 text-xs font-medium text-white/70">Live instrument calibration</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-3">
          {trustCards.map((card) => (
            <StaggerItem key={card.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex h-full items-start gap-4 rounded-3xl border border-ink-950/5 bg-white p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <card.icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-ink-900">{card.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-900/60">{card.body}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
