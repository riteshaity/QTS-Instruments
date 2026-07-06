import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    if (!FORM_ID || FORM_ID === "your_form_id_here") {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject: "Newsletter signup — calibration reminders" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 text-sm text-brand-light">
        <Check size={16} /> You&apos;re subscribed — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm gap-2">
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        className={`w-full rounded-full border bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-light ${
          status === "error" ? "border-red-400/60" : "border-white/15"
        }`}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
      >
        {status === "submitting" ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
      </button>
    </form>
  );
}
