"use client";

import Tag from "../Tags/MachineTag";
import { useQuery } from "@tanstack/react-query";
import tags from "@/server/tags";

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
      <div className="pl-4 w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[15px] justify-center pt-12 pb-12">
        <Tag.skeleton />
        <Tag.skeleton />
        <Tag.skeleton />
        <Tag.skeleton />
        <Tag.skeleton />
      </div>
    );
  }

  return (
    <div className="lg:px-36 md:px-12 px-4 w-full grid  grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]  md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(330px,1fr))] lg:gap-[10px] md:gap-[8px] gap-[6px] place-center items-center justify-center lg:py:24 py-0 lg:mb-24 mb-6">
      {machineTags.metadata.tags.map((tag: { title: string }) => (
        <Tag.Machine
          key={tag.title}
          className="font-main text-xs md:text-lg text-white font-normal"
        >
          {tag.title}
        </Tag.Machine>
      ))}
    </div>
  );
};

export default MachineTagSection;
