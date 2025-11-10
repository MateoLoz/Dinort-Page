"use client";

import Image from "next/image";

type MachineProps = {
id?:number,
description: string,
machineImage: string,
machineName: string,
}


export default function MachineCard  ({...props} : MachineProps) {

return(
    <article className="w-full h-auto flex flex-col gap-4">
        
        <figure className="bg-card-2 rounded-md w-full xl:h-[350px] h-[250px] flex justify-center items-center">
           <Image
           className="xl:w-[240px] xl:h-[180px] md:w-[200px] h-[150px]  w-[180px] h-[130px]"
           loading="lazy"
           src={props.machineImage}
           alt={props.machineName}
           width={240}
           height={240}
           />
        </figure>
        <section className="w-full lg:px-4 px-2">
         <h2 className="font-main font-medium ">{props.machineName}</h2>
        </section>
        <aside className="w-full lg:px-4 px-2">
            <p className="font-main font-light">{props.description}</p>
        </aside>
    </article>
)
}