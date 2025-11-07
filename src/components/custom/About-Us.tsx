"use client"

import { useQuery } from '@tanstack/react-query';
import { about } from '@/server/about';

type AboutUsProps = {
    we:string,
    aboutus:string,
    whatwedo:string,
    languague:string,
}

export default function AboutUs ({aboutus,whatwedo,languague,we} : AboutUsProps) {

    const {data, isLoading, error} = useQuery({queryKey:["about"], queryFn: () => about(languague)})

    if(isLoading)  return(
     <div className='bg-aboutUs w-full h-auto flex flex-col gap-2 justify-center items-center pt-12 pb-12 pr-24 pl-24' id='about-us'>
       <header>
        <h2>{aboutus}</h2>
       </header>
       <aside>
        <h2>Cargando..</h2>
       </aside>
       <header>
        <h2>{whatwedo}</h2>
       </header>
       <h2>Cargando..</h2>
     </div>
    )

    if(error) throw new Error(error.message)

    return(
        <div className='bg-aboutUs w-full h-auto  flex flex-col gap-4 justify-center items-center lg:pt-12 lg:pb-24 pt-6 pb-12 lg:pr-24 lg:pl-24 md:pr-12 md:pl-12 pr-6 pl-6' id='about-us'>
       <header className='w-full h-12 flex justify-center items-center'>
        <h2 className='text-[#828282] text-md uppercase'>{aboutus}</h2>
       </header>
       <aside className='w-full flex flex-col gap-2'>
        <h2 className='text-background font-main font-medium lg:text-[33px] text-lg'>{we}</h2>
       <p className='text-background font-main font-normal lg:text-[25px] md:text-[20px] text-[16px] lg:leading-14 text-md md:leading-7 leading-6'>
        {data?.history}
       </p>
       </aside>
       <aside className='w-full flex flex-col gap-2'>
       <h2 className='text-background font-main font-medium lg:text-[33px] text-lg'>{whatwedo}</h2>
       <p className='text-background font-main font-normal lg:text-[25px] md:text-[20px] text-[16px] lg:leading-14 text-md md:leading-7 leading-6'>
        {data?.work}
       </p>
       </aside>
     </div>
    )
 
}