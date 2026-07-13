import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "../utils/data";
import { fadeUp } from "../utils/motionVariants";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-sage/40 py-28 dark:bg-surface-dark/40 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-deep dark:text-emerald-deep-dark">
            Gallery
          </p>
          <h2 className="font-display text-4xl font-medium text-slate-deep dark:text-white lg:text-5xl">
            Moments of Practice
          </h2>
        </motion.div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0.05 * (i % 3)}
              className="group relative overflow-hidden rounded-2xl shadow-sm shadow-emerald-deep/10"
            >
              <img
                src={src}
                alt="Yoga practice moment"
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
