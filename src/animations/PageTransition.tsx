import {
  motion,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const PageTransition = ({
  children,
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
      }}

      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      exit={{
        opacity: 0,
        y: -30,
        filter: "blur(10px)",
      }}

      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;