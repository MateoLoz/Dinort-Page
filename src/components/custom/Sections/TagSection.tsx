"use client";

import Tag from "../Tags/MachineTag";
import { useQuery } from "@tanstack/react-query";
import tags from "@/server/tags";

type MachineTagProps = {
    lang:string
}

const MachineTagSection = ({lang} : MachineTagProps) => {

     const {data : machineTags, isLoading, error} = useQuery({
        queryKey:['tags'],
        queryFn:() => tags(lang)
     })

    if(error) throw new Error(error.message);

     if(isLoading) {
        return(
            <div className="pl-4 w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[15px] justify-center pt-12 pb-12">
               <Tag.skeleton/>
               <Tag.skeleton/>
               <Tag.skeleton/>
               <Tag.skeleton/>
               <Tag.skeleton/>
            </div>
        )
     }

    return(
        <div className="lg:px-36 px-12 w-full grid  grid-cols-[repeat(auto-fit,minmax(130px,1fr))]  md:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[10px] place-center items-center justify-center lg:py:12 py-0 lg:my-12 my-4">
         {machineTags.metadata.tags.map((tag : {title: string } )=> (
           <Tag.Machine key={tag.title} className="font-main text-xs md:text-lg text-white font-normal">
            {tag.title}
           </Tag.Machine>
         ))}
        </div>
    )
}


export default MachineTagSection;