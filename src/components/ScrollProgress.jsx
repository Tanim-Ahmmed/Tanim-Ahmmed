import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 600 : 180,
    damping: reduceMotion ? 80 : 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-accent-gradient shadow-glow"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
