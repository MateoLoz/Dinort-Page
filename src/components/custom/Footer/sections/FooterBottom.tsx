"use client";

import { motion } from "motion/react";

type FooterBottomProps = {
  title : string
}

export const FooterBottom = ({title} : FooterBottomProps) => {

  const date = new Date().getFullYear();

  return (
    <aside className="overflow-hidden mt-4 h-auto flex md:flex-row flex-col gap-2 items-center sm:justify-between justify-center">
      <motion.h6 
       initial={{y:"100%", opacity:0}}
       whileInView={{y:0, opacity:1}}
       transition={{ duration: 0.60, ease: "easeOut"}}
      className="text-gray-1 text-start font-main font-normal text-[10px] md:text-[14px]"
      >
       { `@${date} ${title}`}
      </motion.h6>
    </aside>
  );
};
