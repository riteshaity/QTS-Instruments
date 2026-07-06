import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import logoFull from "../assets/logo-full.svg";
import { services } from "../data/services";
import NewsletterForm from "./NewsletterForm";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-noise relative overflow-hidden bg-ink-950 text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl italic text-white">Never miss a due date.</p>
            <p className="mt-1 text-sm text-white/50">
              Drop your email and we&apos;ll follow up ahead of your next calibration cycle.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link to="/">
            <img src={logoFull} alt="QTS Instruments" className="h-9 brightness-0 invert" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            NABL accredited calibration laboratory based in Hyderabad, providing temperature,
            humidity, and thermal mapping calibration services across India, per ISO/IEC 17025.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand hover:text-brand"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Calibration Services
          </h3>
          <ul className="space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/${service.slug}`} className="transition-colors hover:text-brand">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
              <span>#1-98/90/25, Uma Enclave, Madhapur, Hyderabad, Telangana 500081</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-brand" />
              <a href="mailto:sales@qtsinstruments.com" className="transition-colors hover:text-brand">
                sales@qtsinstruments.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-brand" />
              <a href="tel:+917670808626" className="transition-colors hover:text-brand">
                +91 76708 08626
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-white/50 sm:px-6 lg:px-8">
          &copy; {year} QTS Instruments &middot; All rights reserved.
        </div>
      </div>
    </footer>
  );
}
