import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle({ isDark, setIsDark }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative flex h-9 w-16 items-center rounded-full border border-emerald-deep/20 bg-sage/60 px-1 transition-colors dark:border-emerald-deep-dark/30 dark:bg-surface-dark"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md dark:bg-emerald-deep-dark"
        style={{ marginLeft: isDark ? "calc(100% - 1.75rem)" : "0" }}
      >
        {isDark ? (
          <FiMoon className="h-3.5 w-3.5 text-slate-deep" />
        ) : (
          <FiSun className="h-3.5 w-3.5 text-gold" />
        )}
      </motion.span>
    </button>
  );
}
