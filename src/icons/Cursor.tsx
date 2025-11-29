"use client"
import '../app/globals.css'
import { motion } from 'framer-motion'


export default function Cursor () {


    return(
        <motion.div
        id='cursor'
        className=" cursor shadow-md  p-4 rounded-lg fixed opacity-0 top-0 left-0 cursor-none display-none"
        >
        <h2 className='text-white'>VER TRABAJO</h2>
        </motion.div>

    )
}