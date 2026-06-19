import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } =
    useScroll();

  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 120,
      damping: 30,
    }
  );

  return (
    <motion.div
      style={{
        scaleX,
      }}

      className="
        fixed
        left-0
        top-0
        z-9999
        h-1
        w-full
        origin-left
        bg-[#E9965A]
      "
    />
  );
};

export default ScrollProgress;