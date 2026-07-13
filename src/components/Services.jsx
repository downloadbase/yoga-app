import { motion } from "framer-motion";
import { SERVICES } from "../utils/data";
import getIcon from "../utils/iconMap";
import { fadeUp, staggerContainer } from "../utils/motionVariants";

export default function Services() {
  return (
    <section id="services" className="bg-sage/40 py-28 dark:bg-surface-dark/40 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-deep dark:text-emerald-deep-dark">
            Services
          </p>
          <h2 className="font-display text-4xl font-medium text-slate-deep dark:text-white lg:text-5xl">
            Practices Tailored to You
          </h2>
          <p className="mt-5 text-lg text-slate-deep/70 dark:text-white/70">
            From gentle beginnings to disciplined advanced practice — every
            offering is rooted in traditional yogic science.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-emerald-deep/10 bg-white p-7 shadow-sm shadow-emerald-deep/5 transition-shadow hover:shadow-xl hover:shadow-emerald-deep/10 dark:border-white/10 dark:bg-surface-dark"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sage text-emerald-deep transition-colors duration-300 group-hover:bg-emerald-deep group-hover:text-white dark:bg-emerald-deep/15 dark:text-emerald-deep-dark">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-slate-deep dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-deep/65 dark:text-white/65">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
