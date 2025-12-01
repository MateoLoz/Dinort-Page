"use client";

import { LightArrow } from "@/icons/LightArrow";
import { JoinUsForm } from "../Form/JoinUsForm";

import { motion } from 'motion/react';

type JoinUsProps = {
  title: string;
  description: string;
  btntitle: string;
};

const JoinUs = ({ title, description, btntitle }: JoinUsProps) => {
  return (
    <div className="w-full md:pt-12 lg:pb-36 pb-24 pt-12 flex flex-col items-center justify-center gap-4">
      
      <section className="overflow-hidden">
      <motion.h2 
      initial={{ y: "100%", opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}     
      transition={{ duration: 0.40, ease: "easeOut"}}
      className="font-main font-medium uppercase lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]"
      >
        {title}
      </motion.h2>
      </section>
      
      <section className="overflow-hidden px-8 sm:px-0 text-center">
      <motion.span 
      initial={{ y: "100%", opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}     
      transition={{ duration: 0.45, ease: "easeOut"}}
      className="font-main font-light text-center text-gray-3 md:text-s lg:text-md"
      >
      {description}
      </motion.span>
      </section>
     
      <JoinUsForm>
        <motion.aside
         initial={{ y: "60%", opacity: 0 }} 
         whileInView={{ y: 0, opacity: 1 }}     
         transition={{ duration: 0.60, ease: "easeOut"}}
         className="overflow-hidden"
        >
         <button className="bg-contact text-white sm:text-md md:text-md text-sm md:p-4 p-2 rounded-3xl flex flex-row justify-center items-center gap-2 hover:scale-[1.02] transition hover:bg-card-3">
          {btntitle}
          <LightArrow  width={22} height={22} />
        </button>
        </motion.aside>
      </JoinUsForm>
    </div>
  );
};

export default JoinUs;
