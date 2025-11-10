"use client";

import getMachines from "@/server/machines";
import { useQuery } from "@tanstack/react-query";
import MachineCard from "../Cards/MachineCard";
import { Card } from "../Cards/Cards";
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
            <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-[15px] justify-center">
                <Card.machineSkeleton/>
                <Card.machineSkeleton/>
                <Card.machineSkeleton/>
                <Card.machineSkeleton/>
            </section>
        </div>
    
        )
    } 

  return(
    <div className="w-full flex flex-col justify-center items-center gap-2  px-4 mb-12 lg:mt-0 md:mt-12 mt-6">
        <header className="w-full flex flex-row gap-2 items-center  mb-12">
        <h2 className="font-main font-normal xl:text-[40px] sm:text-3xl text-2xl">{machineTitle}</h2>
        <ArrowAlt className="lg:w-[40px] lg:h-[40px] md:w-[36px] md:h-[36px] w-[32px] h-[32px]"  fill="#000" />
        </header>
        <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-[15px] justify-center">
        {data.machines.map((items : { id: string; machineName: string; description: string, machineImage: string }) => (
            <Card.machine key={items.id} machineName={items.machineName} description={items.description} machineImage={items.machineImage}/>
        ))}
        </section>
    </div>
  )

}