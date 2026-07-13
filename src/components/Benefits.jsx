import { motion } from "framer-motion";
import { BENEFITS } from "../utils/data";
import getIcon from "../utils/iconMap";
import { fadeUp, staggerContainer, scaleIn } from "../utils/motionVariants";

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-emerald-deep py-28 lg:py-36">
      {/* Ambient breathing ring, echoing the hero signature element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full border border-white/10"
      >
        <div className="animate-breathe h-full w-full rounded-full border border-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Benefits of Yoga
          </p>
          <h2 className="font-display text-4xl font-medium text-white lg:text-5xl">
            What Regular Practice Brings You
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {BENEFITS.map((benefit) => {
            const Icon = getIcon(benefit.icon);
            return (
              <motion.div
                key={benefit.title}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="glass flex flex-col items-center gap-4 rounded-2xl border border-white/15 px-4 py-8 text-center"
              >
                <Icon className="h-9 w-9 text-gold" />
                <p className="font-display text-sm font-medium text-white sm:text-base">
                  {benefit.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
