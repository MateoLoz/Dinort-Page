"use client"

import ArrowAlt from '@/icons/ArrowAlt';
import '../../app/globals.css';
import Cursor from '@/icons/Cursor';

import { useAnimate } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type WorkProps = {
    title: string
}


export default function Work ({title} : WorkProps) {

    const [scope,animate] = useAnimate();
    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    })

    const handleMousePosition = (posX : number, PosY : number ) => {
     setMousePosition({x:posX,y:PosY});
    }



     useEffect(()=>{
      window.addEventListener('mousemove',(e) => {
        handleMousePosition(e.clientX,e.clientY);
      })
      return () => {window.removeEventListener('mousemove', () => {

      })}
     },[])

    const EnterCursor =  () => {
      animate("#cursor",{opacity:1, x:mousePosition.x, y:mousePosition.y})
    }

    const handleMove = () => {
        animate("#cursor", {x:mousePosition.x, y:mousePosition.y});
    }


    const leaveCursor = () => {
     animate("#cursor",{opacity:0})
    }

    return(
        <div id='product' ref={scope} className="w-full h-full flex flex-col gap-2 sm:py-12 py-6">
         <header className='flex flex-row gap-2 items-center md:pb-12 pb-6 pl-4'>
            <h2 className="xl:text-[40px] text-2xl sm:text-3xl font-s font-normal">{title}</h2>
            <ArrowAlt className='lg:w-[40px] lg:h-[40px] md:w-[36px] md:h-[36px] w-[32px] h-[32px]' fill='#000'/>
         </header>
         <aside className="work-layout">
           <div className='cursor-none bg-footer rounded-lg' style={{gridArea:'box-1'}}>1</div>
           <div className='cursor-none bg-footer rounded-lg' style={{gridArea:'box-2'}}>2</div>
           <div className='cursor-none bg-footer rounded-lg' style={{gridArea:'box-3'}}>3</div>
           <div className='cursor-none bg-footer rounded-lg' style={{gridArea:'box-4'}}>4</div>
           <div className='cursor-none bg-footer rounded-lg' style={{gridArea:'box-5'}}>5</div>
           <div className='cursor-none bg-footer rounded-lg' style={{gridArea:'box-6'}}>6</div>
         </aside>
        </div>
    )
}