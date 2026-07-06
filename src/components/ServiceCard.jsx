import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Thermometer, Droplets, Warehouse } from "lucide-react";
import { StaggerItem } from "./RevealOnScroll";

const icons = { Thermometer, Droplets, Warehouse };

export default function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] ?? Thermometer;

  return (
    <StaggerItem>
      <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="h-full">
        <Link
          to={`/${service.slug}`}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-950/5 bg-white shadow-soft transition-shadow hover:shadow-card"
        >
          <div className="duotone-teal relative h-52 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand shadow-md">
              <Icon size={20} />
            </div>
            <span className="absolute bottom-4 right-4 z-10 font-display text-4xl italic text-white/25">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-semibold text-ink-900 mb-3">{service.title}</h3>
            <p className="flex-1 text-sm leading-relaxed text-ink-900/60">{service.summary}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-brand">
              Learn more
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </motion.div>
    </StaggerItem>
  );
}
