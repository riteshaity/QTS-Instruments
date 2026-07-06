import { Pill, Warehouse, UtensilsCrossed, Truck, FlaskConical, Factory } from "lucide-react";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "./RevealOnScroll";
import { industries } from "../data/industries";

const icons = { Pill, Warehouse, UtensilsCrossed, Truck, FlaskConical, Factory };

export default function IndustriesSection() {
  return (
    <section className="bg-noise relative overflow-hidden bg-ink-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
            Who we serve
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Industries we <span className="font-display italic text-brand-light">support</span>
          </h2>
          <p className="mt-4 text-white/50">
            Any facility that depends on accurate temperature or humidity control benefits from
            regular calibration and mapping.
          </p>
        </RevealOnScroll>

        <StaggerGroup className="flex flex-wrap justify-center gap-3">
          {industries.map((item) => {
            const Icon = icons[item.icon];
            return (
              <StaggerItem key={item.label}>
                <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:border-brand/40 hover:bg-brand/10 hover:text-white">
                  <Icon size={16} className="text-brand-light" />
                  {item.label}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
