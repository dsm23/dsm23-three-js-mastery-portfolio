import type { FunctionComponent, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import styles from "~/constants/styles";

type Props = PropsWithChildren<HTMLMotionProps<"section">>;

const StarWrapper: FunctionComponent<Props> = ({ children, ...props }) => (
  <motion.section
    {...props}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} relative z-0 mx-auto min-h-dvh max-w-7xl`}
  >
    <span className="hash-span">&nbsp;</span>
    {children}
  </motion.section>
);

export default StarWrapper;
