import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { TESTIMONIALS } from "../utils/data";
import { fadeUp, staggerContainer } from "../utils/motionVariants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-28 dark:bg-bg-dark lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-deep dark:text-emerald-deep-dark">
            Student Stories
          </p>
          <h2 className="font-display text-4xl font-medium text-slate-deep dark:text-white lg:text-5xl">
            Real Journeys, Real Change
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-emerald-deep/10 bg-white p-8 shadow-sm shadow-emerald-deep/5 dark:border-white/10 dark:bg-surface-dark"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-deep/75 dark:text-white/75">
                “{t.review}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-slate-deep dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-deep/55 dark:text-white/55">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
