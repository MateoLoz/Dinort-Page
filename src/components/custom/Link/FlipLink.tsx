"use client";

import { motion } from "motion/react";

const hoverVariants = {
  initial: { scaleX: 0 },
  hovered: { scaleX: 1 },
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block"
    >
      <motion.div className="inline-block overflow-hidden">
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              className="inline-block text-main font-s"
              initial={{ opacity: 0, y: 100 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: 0.01 * index,
              }}
              key={index}
            >
              {letter}
            </motion.span>
          );
        })}
        <motion.div
          variants={{ hoverVariants }}
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          className="h-[2px] top-6 absolute inset-0 bg-white mix-blend-mode-difference"
          transition={{ duration: 0.35, ease: "easeOut" }}
        ></motion.div>
      </motion.div>
    </motion.a>
  );
};

export default FlipLink;
