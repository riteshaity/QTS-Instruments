import RevealOnScroll, { StaggerGroup } from "./RevealOnScroll";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <section id="feature" className="scroll-mt-20 bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <RevealOnScroll>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              What we do
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Calibration <span className="font-display italic text-brand">Services</span>
            </h2>
            <div className="mt-4 h-1 w-20 rounded bg-brand" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="max-w-xl">
            <p className="text-ink-900/60 leading-relaxed">
              Our company specializes in providing high-quality instrument calibration services,
              and we have the necessary equipment to do so effectively. Our main goal is to
              maintain the accuracy of your instrument, and we take great care to ensure that our
              calibration services meet the highest standards.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
