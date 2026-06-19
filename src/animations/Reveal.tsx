import {
  motion,
} from "framer-motion";

type RevealProps = {
  children: React.ReactNode;

  delay?: number;

  className?: string;
};

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: RevealProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}

      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;