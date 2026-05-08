"use client";

import { motion, type MotionProps } from "framer-motion";

type RevealProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
