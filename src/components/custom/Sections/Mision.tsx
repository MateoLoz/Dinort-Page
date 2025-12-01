"use client";

import { useQuery } from "@tanstack/react-query";
import { mision } from "@/server/mision";
import { Card } from "../Cards/Cards";
import { Skeleton } from "../../ui/skeleton";

import { motion }from "motion/react";

type MisionProps = {
  lang: string;
  misionheader: string;
};

export default function Mision({ lang, misionheader }: MisionProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mision"],
    queryFn: () => mision(lang),
  });

  if (error) throw new Error(error.message);

  if (isLoading) {
    return (
      <div className="w-full h-auto flex flex-col gap-4 xl:mb-24 lg:pt-16 pt-6 lg:pb-16 pb-6 lg:pr-24 lg:pl-24 pr-6 pl-6">
        <header className="w-full h-8 flex justify-center items-center">
          <span className="uppercase font-main font-normal">
            {misionheader}
          </span>
        </header>
        <section className="w-full self-center flex-col gap-4 flex justify-center items-center">
          <div className="w-full xl:pl-36 xl:pr-36 pl-4 pr-4 xl:pt-8 xl:pb-8 pt-4 pb-4 flex flex-col justify-center items-center md:gap-8 gap-4">
            <Skeleton className="h-8 w-full bg-black" />
            <Skeleton className="h-8 w-[80%] bg-black" />
            <Skeleton className="h-8 w-[65%] bg-black" />
          </div>
          <aside className="w-full flex flex-row  gap-4 justify-center items-center">
            <Card.expSkeleton />
            <Card.expSkeleton />
          </aside>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full h-auto flex flex-col gap-4 xl:mb-24 lg:pt-16 pt-6 lg:pb-16 pb-6 lg:pr-24 lg:pl-24 pr-6 pl-6">
      <header className="w-full h-8 flex justify-center items-center">
        <span className="uppercase font-main font-normal">{misionheader}</span>
      </header>
      <section className=" w-full self-center flex-col gap-4 flex justify-center items-center">
        <motion.p 
         initial={{ y: "30%", opacity: 0 }} 
         whileInView={{ y: 0, opacity: 1 }}     
         transition={{ duration: 0.35, ease: "easeOut"}}
        className=" w-full text-center lg:pl-36 lg:pr-36 pl-4 pr-4 xl:pt-8 xl:pb-8 pt-4 pb-4 xl:text-[50px] lg:text-[40px] md:text-[35px] text-2xl font-main font-light font-italic"
        >
          {`"${data?.mision}"`}
        </motion.p>
        <motion.aside 
         initial={{ y: "60%", opacity: 0 }} 
         whileInView={{ y: 0, opacity: 1 }}     
         transition={{ duration: 0.40, ease: "easeOut"}}
        className="overflow-hidden w-full flex flex-row  gap-4 justify-center items-center"
        >
          <Card.experience
            client={data?.metadata.experience.years}
            description={data?.metadata.experience.description}
          />
          <Card.experience
            client={data?.metadata.clients.count}
            description={data?.metadata.clients.description}
          />
        </motion.aside>
      </section>
    </div>
  );
}
