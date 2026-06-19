// src/components/animations/StaggerContainer.tsx

import {
  motion,
} from "framer-motion";

type StaggerContainerProps = {
  children: React.ReactNode;

  className?: string;
};

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const StaggerContainer = ({
  children,
  className = "",
}: StaggerContainerProps) => {
  return (
    <motion.div
      variants={containerVariants}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.2,
      }}

      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;