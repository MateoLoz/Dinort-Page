"use client";

import { useQuery } from "@tanstack/react-query";
import { about } from "@/server/about";
import { ParagraphSkeleton } from "../Skeletons/Paragraph/Parapraph.skeleton";
import { Paragraph } from "../Paragraph/Paragraph";
import { motion } from 'motion/react';

type AboutUsProps = {
  we: string;
  aboutus: string;
  whatwedo: string;
  languague: string;
};

export default function AboutUs({
  aboutus,
  whatwedo,
  languague,
  we,
}: AboutUsProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["about"],
    queryFn: () => about(languague),
  });

  if (isLoading)
    return (
      <div
        className="bg-aboutUs w-full h-auto  flex flex-col gap-4 justify-center items-center lg:pt-12 lg:pb-24 pt-6 pb-12 lg:pr-24 lg:pl-24 md:pr-12 md:pl-12 pr-6 pl-6"
        id="about-us"
      >
        <header className="w-full h-12 flex justify-center items-center">
          <h2 className="text-[#828282] text-md uppercase">{aboutus}</h2>
        </header>
        <aside className="overflow-hidden w-full flex flex-col gap-2">
        <section className="overflow-hidden">
        <motion.h2 
           initial={{ y: "100%", opacity: 0 }} 
           whileInView={{ y: 0, opacity: 1 }}     
           transition={{ duration: 0.40, ease: "easeOut"}}
          className="text-background font-main font-medium lg:text-[33px] text-lg"
          >
            {we}
          </motion.h2>
          </section>
          <ParagraphSkeleton.about />
        </aside>
        <aside className="overflow-hidden w-full flex flex-col gap-2">
          <section className="overflow-hidden">
          <motion.h2 
          initial={{ y: "100%", opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}     
          transition={{ duration: 0.40, ease: "easeOut"}}
          className="text-background font-main font-medium lg:text-[33px] text-lg"
          >
            {whatwedo}
          </motion.h2>
          </section>
          <ParagraphSkeleton.about />
        </aside>
      </div>
    );

  if (error) throw new Error(error.message);

  return (
    <div
      className="bg-aboutUs w-full h-auto  flex flex-col gap-4 justify-center items-center lg:pt-12 lg:pb-24 pt-6 pb-12 lg:pr-24 lg:pl-24 md:pr-12 md:pl-12 pr-6 pl-6"
      id="about-us"
    >
      <header className="w-full h-12 flex justify-center items-center">
        <h2 className="text-[#828282] text-md uppercase">
          {aboutus}
          </h2>
      </header>
      <aside className="overflow-hidden w-full flex flex-col gap-2">
        <section className="overflow-hidden">
        <motion.h2 
         initial={{ y: "100%", opacity: 0 }} 
         whileInView={{ y: 0, opacity: 1 }}     
         transition={{ duration: 0.40, ease: "easeOut"}}
        className="text-background font-main font-medium lg:text-[33px] text-lg"
        >
        {we}
        </motion.h2>
        </section> 
        <Paragraph.about paragraph={data?.history} />
      </aside>
      <aside className="overflow-hidden w-full flex flex-col gap-2">
        <section className="overflow-hidden">
        <motion.h2 
         initial={{ y: "100%", opacity: 0 }} 
         whileInView={{ y: 0, opacity: 1 }}     
         transition={{ duration: 0.40, ease: "easeOut"}}
        className="text-background font-main font-medium lg:text-[33px] text-lg"
        >
          {whatwedo}
        </motion.h2>
        </section>
        <Paragraph.about paragraph={data?.work} />
      </aside>
    </div>
  );
}
