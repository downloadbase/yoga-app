import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { FAQS } from "../utils/data";
import { fadeUp } from "../utils/motionVariants";

function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-emerald-deep/10 dark:border-white/10">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-medium text-slate-deep dark:text-white">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-emerald-deep dark:bg-emerald-deep/20 dark:text-emerald-deep-dark"
        >
          <FiPlus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-slate-deep/70 dark:text-white/70">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-sage/40 py-28 dark:bg-surface-dark/40 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-deep dark:text-emerald-deep-dark">
            FAQ
          </p>
          <h2 className="font-display text-4xl font-medium text-slate-deep dark:text-white lg:text-5xl">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0.15}
          className="mt-12 rounded-2xl border border-emerald-deep/10 bg-white/60 px-6 backdrop-blur-sm dark:border-white/10 dark:bg-surface-dark/60 sm:px-8"
        >
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
