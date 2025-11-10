"use client";

import { motion } from "framer-motion";

type TextBannerProps = {
    title:string
    subtitle:string
}

export default function TextBanner ({title, subtitle}: TextBannerProps) {

    return(
<motion.div 
  className="w-full h-auto sm:py-24 py-16  flex flex-col gap-2 justify-center items-center"
>
  
  <div className="overflow-hidden">
    <motion.span
      className="font-main font-light uppercase xl:text-6xl md:text-5xl sm:text-4xl text-2xl inline-block"
      initial={{ y: "100%", opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}     
      transition={{ duration: 0.35, ease: "easeOut"}}
    >
      {title}
    </motion.span>
  </div>

  <div className="overflow-hidden">
    <motion.h2
      className="font-main font-light uppercase xl:text-6xl md:text-5xl sm:text-4xl text-2xl inline-block"
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut"}}
    >
      {subtitle}
    </motion.h2>
  </div>

</motion.div>
    )
}