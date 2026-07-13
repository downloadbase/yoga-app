import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { fadeUp, slideInLeft, slideInRight } from "../utils/motionVariants";

const CONTACT_ITEMS = [
  { icon: FiPhone, label: "Phone", value: "+91 9410711707" },
  { icon: FiMail, label: "Email", value: "ayushlakhera3@gmail.com" },
  { icon: FiMapPin, label: "Location", value: "Rishikesh, Uttarakhand, India" },
  { icon: FiInstagram, label: "Instagram", value: "@atma.alignment" },
  { icon: FaWhatsapp, label: "WhatsApp", value: "+91 9410711707" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: no backend is wired up. Simply acknowledge submission.
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-cream py-28 dark:bg-bg-dark lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left: info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-deep dark:text-emerald-deep-dark">
            Contact
          </p>
          <h2 className="font-display text-4xl font-medium text-slate-deep dark:text-white lg:text-5xl">
            Begin Your Practice
          </h2>
          <p className="mt-5 max-w-md text-slate-deep/70 dark:text-white/70">
            Reach out to schedule a session, ask a question, or simply start a
            conversation about your wellness goals.
          </p>

          <div className="mt-10 space-y-5">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-emerald-deep dark:bg-emerald-deep/20 dark:text-emerald-deep-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-deep/50 dark:text-white/50">
                    {label}
                  </p>
                  <p className="font-medium text-slate-deep dark:text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInRight}
          className="rounded-3xl border border-emerald-deep/10 bg-white/70 p-8 shadow-lg shadow-emerald-deep/5 backdrop-blur-sm dark:border-white/10 dark:bg-surface-dark/70 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-deep dark:text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-xl border border-emerald-deep/15 bg-white px-4 py-3 text-sm text-slate-deep outline-none transition-colors focus:border-emerald-deep dark:border-white/15 dark:bg-surface-dark dark:text-white"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-deep dark:text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-emerald-deep/15 bg-white px-4 py-3 text-sm text-slate-deep outline-none transition-colors focus:border-emerald-deep dark:border-white/15 dark:bg-surface-dark dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-deep dark:text-white">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-emerald-deep/15 bg-white px-4 py-3 text-sm text-slate-deep outline-none transition-colors focus:border-emerald-deep dark:border-white/15 dark:bg-surface-dark dark:text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-deep dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your goals..."
                className="w-full resize-none rounded-xl border border-emerald-deep/15 bg-white px-4 py-3 text-sm text-slate-deep outline-none transition-colors focus:border-emerald-deep dark:border-white/15 dark:bg-surface-dark dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-deep py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-emerald-deep/20 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
            </button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-medium text-emerald-deep dark:text-emerald-deep-dark"
              >
                Thank you — your message has been noted.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
