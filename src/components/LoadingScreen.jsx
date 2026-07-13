import { motion, AnimatePresence } from "framer-motion";
import { GiLotus } from "react-icons/gi";

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-deep"
        >
          <motion.div
            animate={{ scale: [0.85, 1.1, 0.85] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <GiLotus className="h-16 w-16 text-emerald-deep-dark" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
