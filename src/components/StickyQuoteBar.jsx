import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

export default function StickyQuoteBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-30 sm:inset-x-auto sm:bottom-6 sm:right-6"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-ink-950/5 bg-ink-950 px-5 py-4 shadow-card sm:max-w-sm">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light/20 text-brand-light">
              <Sparkles size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Need a calibration quote?</p>
              <a href="#contact" className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-brand-light underline underline-offset-2">
                Get in touch <ArrowRight size={14} />
              </a>
            </div>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="shrink-0 text-white/40 transition-colors hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
