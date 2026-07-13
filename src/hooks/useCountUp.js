import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animates a number from 0 up to `end` once the element scrolls into view.
export default function useCountUp(end, duration = 1800) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out for a gentle settle rather than a mechanical tick-up.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(end);
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return [ref, value];
}
