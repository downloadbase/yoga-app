import { motion } from "framer-motion";
import { GiLotus } from "react-icons/gi";
import { fadeUp, slideInLeft, slideInRight } from "../utils/motionVariants";
import { STATS } from "../utils/data";
import useCountUp from "../hooks/useCountUp";
import ayushImage from "../assets/ayush.jpeg";

function StatCard({ stat, delay }) {
  const [ref, value] = useCountUp(stat.end);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      custom={delay}
      className="rounded-2xl border border-emerald-deep/10 bg-white/70 p-6 text-center shadow-sm shadow-emerald-deep/5 backdrop-blur dark:border-white/10 dark:bg-surface-dark/70"
    >
      <p className="font-display text-4xl font-semibold text-emerald-deep dark:text-emerald-deep-dark">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-deep/70 dark:text-white/70">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-28 dark:bg-bg-dark lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-sage/60 dark:bg-emerald-deep/10" />
            <img
              src={ayushImage}
              alt="Ayush Lakhera guiding a yoga practice"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-emerald-deep/10"
            />
            <div className="glass absolute -bottom-6 -right-6 flex items-center gap-3 rounded-2xl border border-white/40 px-5 py-4 shadow-lg">
              <GiLotus className="h-8 w-8 text-emerald-deep dark:text-emerald-deep-dark" />
              <div>
                <p className="font-display text-sm font-semibold text-slate-deep dark:text-white">
                  B.Sc. Yogic Science
                </p>
                <p className="text-xs text-slate-deep/60 dark:text-white/60">Certified Instructor</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInRight}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-deep dark:text-emerald-deep-dark">
            About
          </p>
          <h2 className="font-display text-4xl font-medium text-slate-deep dark:text-white lg:text-5xl">
            Meet Ayush Lakhera
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-deep/75 dark:text-white/75">
            Holding a Bachelor of Science in Yogic Science, Ayush is a
            passionate yoga instructor dedicated to holistic wellness. His
            practice weaves together physical health, mental peace, and
            spiritual growth — helping students build a sustainable, lifelong
            relationship with their body and breath.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Traditional yogic foundations backed by formal academic study",
              "A calm, individualized approach to every student's journey",
              "Equal focus on strength, flexibility, and inner stillness",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-deep/75 dark:text-white/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={0.1 * i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
