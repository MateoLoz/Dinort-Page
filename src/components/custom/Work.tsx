"use client"

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
        <div ref={scope} className="w-full h-full flex flex-col gap-2 pt-12 pb-12">
         <header className='h-24 flex items-center'>
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-s font-normal">{title}</h2>
         </header>
         <aside onMouseEnter={EnterCursor} onMouseMove={handleMove} onMouseLeave={leaveCursor} className="work-layout">
            <Cursor/>
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