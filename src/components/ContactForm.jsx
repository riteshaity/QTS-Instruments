import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base text-ink-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please fill in every field before sending.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (!FORM_ID || FORM_ID === "your_form_id_here") {
      setError("Contact form isn't connected yet — add VITE_FORMSPREE_ID in .env to enable sending.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong sending your message. Please try again or email us directly.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
        Contact <span className="font-display italic text-brand">Us</span>
      </h2>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-gray-600">
          Name
        </label>
        <input id="name" name="name" type="text" value={values.name} onChange={handleChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-gray-600">
          Email
        </label>
        <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <AnimatePresence mode="wait">
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700"
          >
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
            <span>Thanks — your message has been sent. We&apos;ll get back to you shortly.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={18} /> Submit
          </>
        )}
      </motion.button>
    </form>
  );
}
