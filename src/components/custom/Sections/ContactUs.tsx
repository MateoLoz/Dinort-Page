"use client";

import { LightArrow } from "@/icons/LightArrow";
import Link from "next/link";

import { motion } from 'motion/react';

type ContactProps = {
  title: string;
  href: string;
  btntitle: string;
};

const ContactUs = ({ title, href, btntitle }: ContactProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center md:pt-12 pt-12 lg:pb-36 pb-24">
      
      <section className="overflow-hidden">
      <motion.h2 
          initial={{ y: "100%", opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}     
          transition={{ duration: 0.40, ease: "easeOut"}}
      className="inline-block font-main font-medium uppercase lg:text-[70px] md:text-[45px] sm:text-[35px] text-[28px] no-wrap"
      >
        {title}
      </motion.h2>
      </section>

      <motion.aside 
       initial={{ y: "30%", opacity: 0 }} 
       whileInView={{ y: 0, opacity: 1 }}     
       transition={{ duration: 0.70, ease: "easeOut"}}
      className="overflow-hidden"
      >
       <button className="bg-contact md:p-4 p-3  rounded-3xl flex flex-row gap-2 items-center text-white hover:scale-[1.02] transition hover:bg-card-3">
        <Link className="w-full flex flex-row justify-center items-center gap-2  sm:text-sm md:text-md text-xs" href={href}>
        {btntitle}
        <LightArrow width={22} height={22} />
        </Link>
      </button>
      </motion.aside>
    </div>
  );
};

export default ContactUs;
