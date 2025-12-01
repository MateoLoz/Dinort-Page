"use client";

import Tag from "../Tags/MachineTag";
import { useQuery } from "@tanstack/react-query";
import tags from "@/server/tags";

import { motion } from 'motion/react';

type MachineTagProps = {
  lang: string;
};

const MachineTagSection = ({ lang }: MachineTagProps) => {
  const {
    data: machineTags,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: () => tags(lang),
  });

  if (error) throw new Error(error.message);

  if (isLoading) {
    return (
      <div className="lg:px-36 md:px-12 px-4 w-full grid  grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]  md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(330px,1fr))] lg:gap-[10px] md:gap-[8px] gap-[6px] place-center items-center justify-center lg:py:24 py-0 lg:mb-24 mb-6">
        <Tag.skeleton />
        <Tag.skeleton />
        <Tag.skeleton />
        <Tag.skeleton />
        <Tag.skeleton />
      </div>
    );
  }

  return (
    <motion.div 
    initial={{ y: "20%", opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }}     
    transition={{ duration: 0.40, ease: "easeOut"}}
    className="overflow-hidden py-16 lg:px-36 md:px-12 px-4 w-full grid  grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]  md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(330px,1fr))] lg:gap-[10px] md:gap-[8px] gap-[6px] place-center items-center justify-center lg:py:24 py-0 lg:mb-24 mb-6">
      {machineTags.metadata.tags.map((tag: { title: string }) => (
        <Tag.Machine
          key={tag.title}
          className="font-main text-xs md:text-lg text-white font-normal"
        >
          {tag.title}
        </Tag.Machine>
      ))}
    </motion.div>
  );
};

export default MachineTagSection;
