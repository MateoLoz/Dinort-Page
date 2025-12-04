"use client"

import { motion } from "motion/react";

type ContactBannerProps = {
    title?:string,
    subtitle?:string
}

const ContactBanner = ( {title,subtitle}: ContactBannerProps) => {
     
    return(
       <section className="w-full min-h-[60vh] bg-banner-2 flex flex-col gap-2 justify-center items-center px-12 md:px-24">
           <section className="overflow-hidden">
           <motion.h2 
           initial={{y:"100%", opacity:0}}
           animate={{
            y:0,
            opacity:1,
            transition:{duration:0.5, ease:"easeIn"}}}
           className="text-center font-main font-medium text-[30px] md:text-[40px] lg:text-[60px] text-yellow-1 uppercase"
           >
        {title}
           </motion.h2>
           </section>
           <section className="overflow-hidden">
           <motion.h4
            initial={{y:"100%", opacity:0}}
            animate={{
            y:0,
            opacity:1,
            transition:{duration:0.85, ease:"easeIn"}}}
           className="text-center font-main font-light text-white text-[14px] md:text-[18px]"
           >
            {subtitle}
            </motion.h4>
           </section>
       </section>
    )
}

export default ContactBanner