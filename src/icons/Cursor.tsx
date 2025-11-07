"use client"

import { motion , useAnimate} from 'framer-motion'
import { useEffect, useState } from 'react' 

export default function Cursor () {


    return(
        <motion.div
        id='cursor'
        className="bg-blend-difference mix-blend-mode-difference bg-[rgba(45, 110, 221, 0.86)]  p-4 rounded-lg fixed opacity-0 top-0 left-0 cursor-none display-none"

        >
        <h2 className='bg-blend-difference bg-blend-difference text-white'>VER TRABAJO</h2>
        </motion.div>

    )
}