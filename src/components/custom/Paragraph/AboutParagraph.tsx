"use client"

import { motion } from 'motion/react';

type AboutProps = {
  paragraph: string;
};

export const AboutParagraph = ({ paragraph }: AboutProps) => {
  return (
    <section className='overflow-hidden'>
    <motion.p 
     initial={{ y: "30%", opacity: 0 }} 
     whileInView={{ y: 0, opacity: 1 }}     
     transition={{ duration: 0.40, ease: "easeOut"}}
    className="text-background font-main font-normal lg:text-[22px] md:text-[20px] text-[14px] lg:leading-14 text-md md:leading-7 leading-6"
    >
      {paragraph}
    </motion.p>
    </section>
  );
};
