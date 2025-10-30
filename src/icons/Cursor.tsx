"use client"

import { motion , useAnimate} from 'framer-motion'
import { useEffect, useState } from 'react' 

export default function Cursor () {

    const [mouse,setMousePosition] = useState({
        posX:0,
        posY:0
    })

    //useEffect(()=> {
      //  window.addEventListener('mousemove', (e) => {
       //   console.log(e.clientY,e.clientY);
      //  })
    // })

    return(
        <div
        id='cursor'
        className="bg-blend-color  p-4 rounded-lg fixed opacity-0 top-0 left-0 cursor-none"
        >
        <h2 className='mix-blend-difference'>VER TRABAJO</h2>
        </div>

    )
}