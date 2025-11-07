"use client";

import getMachines from "@/server/machines";
import { useQuery } from "@tanstack/react-query";
import MachineCard from "./MachineCard";
import ArrowAlt from "@/icons/ArrowAlt";

type MachineProps = {
    lang: string,
    machineTitle:string
}

export default function Machines ({lang,machineTitle} : MachineProps)  {

    const {data,isLoading,error} = useQuery({
        queryKey:['machines'],
        queryFn:()=> getMachines(lang)
    })

    if(error) throw new Error(error.message);

    if(isLoading){
        return (
            <div className="w-full flex flex-col justify-center items-center gap-2  px-4 mb-12">
            <header className="w-full flex flex-row gap-2 items-center mb-12">
              <h2 className="font-main font-normal text-xl">{machineTitle}</h2>
              <ArrowAlt className="trasform-[rotate(90deg)]" width={42} height={42} fill="#000" />
            </header>
            <section className="w-full flex flex-row gap-4 justify-center">
                Skeleton!
            </section>
        </div>
    
        )
    } 

  return(
    <div className="w-full flex flex-col justify-center items-center gap-2  px-4 mb-12 md:mt-0 mt-12">
        <header className="w-full flex flex-row gap-2 items-center  mb-12">
        <h2 className="font-main font-normal text-[40px]">{machineTitle}</h2>
        <ArrowAlt className="trasform-[rotate(90deg)]" width={42} height={42} fill="#000" />
        </header>
        <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-[15px] justify-center">
        {data.machines.map((items : { id: string; machineName: string; description: string, machineImage: string }) => (
             <MachineCard key={items.id} machineName={items.machineName} description={items.description} machineImage={items.machineImage} />
          
        ))}
        </section>
    </div>
  )

}