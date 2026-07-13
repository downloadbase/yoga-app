import { motion } from "framer-motion";
import { WHY_CHOOSE_ME } from "../utils/data";
import getIcon from "../utils/iconMap";
import { fadeUp, staggerContainer } from "../utils/motionVariants";

export default function WhyChooseMe() {
  return (
    <section className="bg-cream py-28 dark:bg-bg-dark lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-deep dark:text-emerald-deep-dark">
            Why Choose Me
          </p>
          <h2 className="font-display text-4xl font-medium text-slate-deep dark:text-white lg:text-5xl">
            A Practice Built on Trust
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CHOOSE_ME.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl border border-emerald-deep/10 bg-white/60 p-7 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-emerald-deep/10 dark:border-white/10 dark:bg-surface-dark/60"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-slate-deep dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-deep/65 dark:text-white/65">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
