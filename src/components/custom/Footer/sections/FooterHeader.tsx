"use client";

import { motion } from "motion/react";

type FooterHeaderProps = {
  brand: string;
  location: string;
  email: string;
};

export const FooterHeader = ({ brand, location, email }: FooterHeaderProps) => {
  return (
    <section className="flex flex-col gap-2">
      <section className="overflow-hidden">
      <motion.h2 
       initial={{y:"100%", opacity:0}}
       whileInView={{y:0, opacity:1}}
       transition={{ duration: 0.40, ease: "easeOut"}}
      className="lg:text-[26px] text-[22px] text-white font-main font-medium">
        {brand}
      </motion.h2>
      </section>
      <section className="overflow-hidden">
      <motion.h4
       initial={{y:"100%", opacity:0}}
       whileInView={{y:0, opacity:1}}
       transition={{ duration: 0.60, ease: "easeOut"}}
      className="lg:text-[16px] md:text-[14px] text-[12px] font-main font-normal text-gray-1"
      >
        {location}
      </motion.h4>
      </section>
       
       <section className="overflow-hidden">
       <motion.h3 
        initial={{y:"100%", opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{ duration: 0.60, ease: "easeOut"}}
       className="lg:text-[16px] md:text-[14px] text-[12px] font-main font-normal text-gray-1"
       >
        {email}
      </motion.h3 >
       </section>
    </section>
  );
};
