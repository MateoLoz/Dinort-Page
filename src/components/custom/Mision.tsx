"use client"

import { useQuery } from '@tanstack/react-query';
import { mision } from '@/server/mision';

type MisionProps = {
    lang: string,
    misionheader:string
}

export default function Mision  ({lang, misionheader} : MisionProps) {
     
    const {data, isLoading, error} = useQuery({
        queryKey:['mision'],
        queryFn: () => mision(lang)
    })
    
    if(error) throw new Error(error.message);

    if(isLoading){
        return(
            <div className="w-full h-auto lg:pt-24 pt-6 lg:pb-24 pb-6 pr-24 pl-24">
            <header className="w-full h-8 flex justify-center items-center">
              <span className='uppercase'>{misionheader}</span>
            </header>
            <section className="w-full flex-col gap-4 flex justify-center items-center">
               <p>
   
               </p>
              <aside className="w-full flex flex-row gap-4 justify-center items-center">
                <article>
                </article>
                <article> 
                </article>
              </aside>
            </section>
          </div>
        )
    }
 

    return(
        <div className="w-full h-auto flex flex-col gap-4 xl:mb-24 lg:pt-16 pt-6 lg:pb-16 pb-6 lg:pr-24 lg:pl-24 pr-6 pl-6">
        <header className="w-full h-8 flex justify-center items-center">
          <span className='uppercase font-main font-normal'>{misionheader}</span>
        </header>
        <section className="w-full self-center flex-col gap-4 flex justify-center items-center">
           <p className=' w-full text-center xl:pl-36 xl:pr-36 pl-4 pr-4 xl:pt-8 xl:pb-8 pt-4 pb-4  lg:text-[60px] md:text-[45px] text-2xl font-main font-light font-italic'>
             {`"${data?.mision}"`}
           </p>
          <aside className="w-full flex md:flex-row flex-col gap-4 justify-center items-center">

          <article className='bg-card h-50 w-80 rounded-md flex flex-col gap-2 justify-center items-center'>
            <h2 className='text-background text-[50px] font-main font-normal'>{data?.metadata.experience.years}+</h2>
            <span className='text-background text-[16px] font-main font-normal'>{data?.metadata.experience.description}</span>
            </article>

            <article className='bg-card h-50 w-80 rounded-md flex flex-col gap-2 justify-center items-center'>
                <h2 className='text-background text-[50px] font-main font-normal'>{data?.metadata.clients.count}+</h2>
                <span className='text-background text-[16px]'>{data?.metadata.clients.description}</span>
            </article>
          
          </aside>
        </section>
      </div>
    )
}