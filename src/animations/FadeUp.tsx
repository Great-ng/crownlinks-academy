// src/components/animations/FadeUp.tsx

import { motion } from "framer-motion";

import type { Variants } from "framer-motion";
type FadeUpProps = {
  children: React.ReactNode;

  className?: string;
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const FadeUp = ({
  children,
  className = "",
}: FadeUpProps) => {
  return (
    <motion.div
      variants={fadeUpVariants}

      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;