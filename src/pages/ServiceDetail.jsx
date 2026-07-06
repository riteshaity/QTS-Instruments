import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { ArrowRight, BadgeCheck, ChevronRight, Thermometer, Droplets, Warehouse } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "../components/RevealOnScroll";
import { services, getServiceBySlug } from "../data/services";

const icons = { Thermometer, Droplets, Warehouse };

const processSteps = [
  {
    title: "Request a quote",
    body: "Tell us which instruments or environments need calibration and your preferred timeline.",
  },
  {
    title: "Lab or on-site calibration",
    body: "Our qualified technicians calibrate at our Hyderabad lab or on-site anywhere in India.",
  },
  {
    title: "Certification & report",
    body: "You receive a traceable calibration certificate in accordance with ISO/IEC 17025.",
  },
  {
    title: "Ongoing support",
    body: "We track due dates and follow up ahead of your next required calibration cycle.",
  },
];

export default function ServiceDetail({ slug }) {
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) document.title = `${service.title} | QTS Instruments`;
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const Icon = icons[service.icon] ?? Thermometer;
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const titleWords = service.title.split(" ");
  const titleLead = titleWords.slice(0, -1).join(" ");
  const titleLast = titleWords[titleWords.length - 1];

  return (
    <div>
      <Navbar />

      <section className="bg-cream px-4 pb-8 pt-28 sm:px-6 sm:pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-noise duotone-teal relative overflow-hidden rounded-[32px] shadow-card">
            <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="relative z-10 flex min-h-[22rem] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[26rem]">
              <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-white/60">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight size={14} />
                <span className="text-white">{service.shortTitle}</span>
              </div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-light">
                <Icon size={28} />
              </div>
              <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {titleLead} <span className="font-display italic text-brand-light">{titleLast}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <RevealOnScroll>
            <p className="text-lg leading-relaxed text-ink-900/60">{service.summary}</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Scope
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              What we <span className="font-display italic text-brand">calibrate</span>
            </h2>
          </RevealOnScroll>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {service.coverage.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-3 rounded-2xl border border-ink-950/5 bg-white p-4 shadow-soft">
                  <BadgeCheck size={20} className="shrink-0 text-brand" />
                  <span className="text-sm text-ink-900/80">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              How it works
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Our <span className="font-display italic text-brand">process</span>
            </h2>
          </RevealOnScroll>

          <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-3xl border border-ink-950/5 bg-cream p-6">
                  <span className="font-display text-4xl italic text-brand/25">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-base font-semibold text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-900/60">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-noise relative overflow-hidden bg-ink-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to schedule your{" "}
              <span className="font-display italic text-brand-light">{service.shortTitle.toLowerCase()}</span>{" "}
              calibration?
            </h2>
            <p className="mt-4 text-white/60">
              Reach out and our team will get back to you with a tailored quote.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get a Quote
              <ArrowRight size={16} />
            </a>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Other calibration <span className="font-display italic text-brand">services</span>
            </h2>
          </RevealOnScroll>
          <div className="grid gap-8 sm:grid-cols-2">
            {otherServices.map((other) => {
              const OtherIcon = icons[other.icon] ?? Thermometer;
              return (
                <RevealOnScroll key={other.slug}>
                  <Link
                    to={`/${other.slug}`}
                    className="group flex items-center gap-5 rounded-3xl border border-ink-950/5 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <OtherIcon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-ink-900">{other.title}</h3>
                      <p className="text-sm text-ink-900/50">{other.shortTitle}</p>
                    </div>
                    <ArrowRight size={18} className="text-ink-900/20 transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
