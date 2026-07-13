import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiYoutube, FiArrowDown } from "react-icons/fi";
import { fadeUp, fadeIn } from "../utils/motionVariants";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-deep"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80"
          alt="Silhouette of a yoga practitioner meditating at sunrise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/80 via-slate-deep/60 to-slate-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/70 via-transparent to-transparent" />
      </div>

      {/* Signature breathing orb — ambient, echoes the pranayama breath cycle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 hidden h-[32rem] w-[32rem] rounded-full border border-gold/20 md:block"
      >
        <div className="animate-breathe h-full w-full rounded-full border border-gold/30" />
        <div className="animate-breathe-slow absolute inset-10 rounded-full border border-sage/25" />
      </div>

      {/* Floating accents */}
      <motion.div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute left-[8%] top-[22%] hidden h-3 w-3 rounded-full bg-gold/70 md:block"
      />
      <motion.div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute left-[18%] top-[65%] hidden h-2 w-2 rounded-full bg-sage/80 md:block"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
          className="mb-5 font-sans text-sm font-semibold uppercase tracking-[0.35em] text-gold"
        >
          Yoga • Wellness • Mindfulness
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.25}
          className="max-w-3xl font-display text-5xl font-medium leading-[1.08] text-white sm:text-6xl lg:text-7xl"
        >
          Find Balance.
          <br />
          <span className="italic text-sage">Transform Your Life</span>
          <br />
          Through Yoga.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.4}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
        >
          Helping people improve flexibility, strength, mindfulness, and inner
          peace through traditional yogic practices — guided by Ayush Lakhera.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.55}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group relative overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-slate-deep shadow-lg shadow-gold/20 transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">Book a Session</span>
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Explore Services
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.8}
          className="mt-14 flex items-center gap-5"
        >
          <span className="h-px w-10 bg-white/30" />
          <a
            href="https://www.instagram.com/atma.alignment/"
            aria-label="Instagram"
            className="text-white/70 transition-colors hover:text-gold"
          >
            <FiInstagram className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <FiArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
