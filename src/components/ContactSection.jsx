import { MapPin, Mail, Phone } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Let&apos;s <span className="font-display italic text-brand">Talk</span>
          </h2>
        </RevealOnScroll>

        <div className="flex flex-col gap-10 lg:flex-row">
          <RevealOnScroll direction="left" className="relative flex-[1.4] overflow-hidden rounded-3xl bg-gray-200 shadow-soft">
            <iframe
              title="QTS Instruments location"
              src="https://maps.google.com/maps?q=17.441714,78.391073&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale contrast-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-transparent" />
            <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-6 sm:p-8">
              <div className="max-w-sm space-y-4 rounded-xl bg-white/95 p-6 shadow-lg backdrop-blur">
                <div className="flex gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-900">Address</p>
                    <p className="mt-1 text-sm text-gray-600">
                      #1-98/90/25, Uma Enclave, Madhapur, Hyderabad, Telangana 500081
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={20} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-900">Email</p>
                    <a href="mailto:sales@qtsinstruments.com" className="text-sm text-brand hover:underline">
                      sales@qtsinstruments.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-900">Phone</p>
                    <a href="tel:+917670808626" className="text-sm text-gray-600 hover:text-brand">
                      +91 76708 08626
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="flex-1 rounded-3xl border border-ink-950/5 bg-white p-8 shadow-soft sm:p-10">
            <ContactForm />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
