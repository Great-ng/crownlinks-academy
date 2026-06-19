// src/components/animations/FloatingElement.tsx

import {
  motion,
} from "framer-motion";

type FloatingElementProps = {
  children: React.ReactNode;

  duration?: number;

  y?: number;
};

const FloatingElement = ({
  children,
  duration = 5,
  y = 16,
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -y, 0],
      }}

      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;