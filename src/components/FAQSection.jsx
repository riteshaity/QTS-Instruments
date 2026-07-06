import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { faqs } from "../data/faqs";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-950/8 bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-ink-900">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-ink-900/60">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            More questions
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Frequently Asked <span className="font-display italic text-brand">Questions</span>
          </h2>
        </RevealOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={faq.q} delay={i * 0.04}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
