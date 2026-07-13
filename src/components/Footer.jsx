import { GiLotus } from "react-icons/gi";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import { NAV_LINKS } from "../utils/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-deep pt-16 text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-medium text-white">
            <GiLotus className="h-7 w-7 text-emerald-deep-dark" />
            atma.alignment
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Traditional yogic practices for a balanced, mindful, modern life.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            <li>+91 9410711707</li>
            <li>ayushlakhera3@gmail.com</li>
            <li>Rishikesh, Uttarakhand, India</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Follow
          </h4>
          <div className="mt-4 flex gap-4">
            <a href="https://www.instagram.com/atma.alignment/" aria-label="Instagram" className="text-white/60 transition-colors hover:text-gold">
              <FiInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

        <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50 lg:px-10">
      &copy; {year} atma.alignment. All rights reserved. &middot; Designed &amp;
      Developed by{" "}
      <a
        href="https://www.instagram.com/mohituniyal20/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium"
      >
        Mohit Uniyal
      </a>
    </div>
    </footer>
  );
}
