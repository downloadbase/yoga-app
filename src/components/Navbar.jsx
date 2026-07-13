import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { GiLotus } from "react-icons/gi";
import { NAV_LINKS } from "../utils/data";
import useActiveSection from "../hooks/useActiveSection";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-solid shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 font-display text-xl font-medium tracking-tight"
        >
          <GiLotus
            className={`h-7 w-7 transition-colors ${
              scrolled ? "text-emerald-deep dark:text-emerald-deep-dark" : "text-white"
            }`}
          />
          <span className={scrolled ? "text-slate-deep dark:text-white" : "text-white"}>
            atma.alignment
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? activeId === link.id
                      ? "text-emerald-deep dark:text-emerald-deep-dark"
                      : "text-slate-deep/80 hover:text-emerald-deep dark:text-white/80 dark:hover:text-emerald-deep-dark"
                    : activeId === link.id
                    ? "text-gold"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gold"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
          <button
            onClick={() => handleNavClick("contact")}
            className="rounded-full bg-emerald-deep px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-deep/20 transition-transform hover:-translate-y-0.5 hover:bg-emerald-deep/90 active:translate-y-0"
          >
            Book Session
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`text-2xl ${scrolled ? "text-slate-deep dark:text-white" : "text-white"}`}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="glass-solid overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full rounded-lg px-3 py-3 text-left text-base font-medium transition-colors ${
                      activeId === link.id
                        ? "bg-sage text-emerald-deep dark:bg-emerald-deep/20 dark:text-emerald-deep-dark"
                        : "text-slate-deep dark:text-white/85"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full rounded-full bg-emerald-deep px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Book Session
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
