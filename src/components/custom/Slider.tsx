
"use client";

import '../../app/globals.css';
import { useQuery } from '@tanstack/react-query';
import { getHero } from '@/server/hero';
import Image from 'next/image';


type CompanysHero = {
   name:string,
   ClientLogo: string
}

export function Companys() {

    const {data, isLoading, error} = useQuery({ queryKey: ["hero"], queryFn:  getHero});

    if(isLoading) return <h2>Cargando..</h2>
    
    if(error) throw new Error(error.message);

    return(
      <div className='h-[15vh] flex justify-center items-center'>
      <div className="carousel">
          <div className="group">
          {data.hero.map((companys : CompanysHero) => (
            <Slider key={companys.name} name={companys.name} ClientLogo={companys.ClientLogo}/>
          ))}
          </div>
          <div aria-hidden className="group">
      {data.hero.map((companys : CompanysHero) => (
            <Slider key={companys.name} name={companys.name} ClientLogo={companys.ClientLogo}/>
          ))}
      </div>
      </div>
      </div>
    )

   
}


export default function Slider ({name, ClientLogo} : CompanysHero) {

   return(
         <article className="cards">
           <Image height={65} width={100} src={ClientLogo} alt={name} />
         </article>
   )
}