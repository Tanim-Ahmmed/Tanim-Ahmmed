import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorAura = () => {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 140, damping: 22, mass: 0.2 });
  const y = useSpring(mouseY, { stiffness: 140, damping: 22, mass: 0.2 });

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const update = (event) => {
      mouseX.set(event.clientX - 120);
      mouseY.set(event.clientY - 120);
    };

    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, [mouseX, mouseY, reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-60 w-60 rounded-full bg-accent/10 blur-3xl md:block"
      style={{ x, y }}
    />
  );
};

export default CursorAura;
