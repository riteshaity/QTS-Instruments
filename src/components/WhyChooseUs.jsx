import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "./RevealOnScroll";
import { credentials } from "../data/credentials";

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <RevealOnScroll className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Why QTS Instruments
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              Calibration you can put in an{" "}
              <span className="font-display italic text-brand">audit report</span>.
            </h2>
            <p className="mt-5 max-w-sm text-ink-900/60">
              Every certificate, every visit, every follow-up is built around one goal: standing
              up to scrutiny when it matters most.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-brand"
            >
              Talk to our team
              <ArrowRight size={16} />
            </a>
          </RevealOnScroll>

          <StaggerGroup className="divide-y divide-ink-950/10 border-t border-ink-950/10">
            {credentials.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-start gap-6 py-7 sm:gap-10"
                >
                  <span className="font-display text-3xl italic text-ink-900/20 sm:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900 transition-colors group-hover:text-brand">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-900/55">{item.body}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
