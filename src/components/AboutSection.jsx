import { BadgeCheck } from "lucide-react";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "./RevealOnScroll";
import aboutImage from "../assets/about.webp";
import { credentials } from "../data/credentials";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Who we are
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            About <span className="font-display italic text-brand">Us</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="duotone-teal relative mb-16 h-64 overflow-hidden rounded-[28px] shadow-card sm:h-96">
          <img src={aboutImage} alt="QTS Instruments calibration facility" className="h-full w-full object-cover" />
          <div className="absolute bottom-6 left-6 z-10 rounded-2xl bg-white/95 px-5 py-3 shadow-soft backdrop-blur">
            <p className="font-display text-2xl italic text-ink-900">Est. 2020</p>
            <p className="text-xs uppercase tracking-widest text-ink-900/50">Hyderabad, India</p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-10 sm:grid-cols-3">
          <StaggerGroup className="space-y-5 sm:col-span-1">
            {credentials.slice(0, 4).map((item) => (
              <StaggerItem key={item.title} direction="left">
                <div className="flex items-start gap-3">
                  <BadgeCheck size={20} className="mt-0.5 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-ink-900/70">{item.title}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <RevealOnScroll direction="right" className="sm:col-span-2 sm:border-l sm:border-ink-950/10 sm:pl-10">
            <p className="text-lg leading-relaxed text-ink-900/60">
              <span className="font-display text-2xl italic text-ink-900">
                QTS Instruments is a Hyderabad-based calibration laboratory{" "}
              </span>
              that is NABL accredited and was established in 2020. Our focus is on providing
              localized support and services to our customers as per their requirements. We offer
              calibration services for thermal instruments at our laboratory as well as on-site at
              our customer&apos;s location. We use the latest range of equipment in our laboratory,
              and our facilities are continuously being upgraded to keep up with advancements in
              technology and meet customer needs. Our procedures are in accordance with
              National/International Standards ISO/IEC 17025 to ensure the accuracy and
              reliability of our calibration services.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
