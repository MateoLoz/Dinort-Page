"use client";

import { motion } from "motion/react";

type PoliticsProps = {
title: string,
paragraph: string,
}

export const PoliticsArticle = ({...props} : PoliticsProps) => {
    return (
        <article className="overflow-hidden flex flex-col gap-2 sm:py-4 sm:px-16 py-2 px-4">
            <section className="overflow-hidden">
            <motion.h3
        initial={{y:"100%",opacity:0}}
        animate={{
            y:0,
             opacity:1,
             transition:{duration: 0.40, ease: "easeInOut"}}}
        className="md:text-2xl text-xl font-main font-medium"
        >
        {props.title}
       
        </motion.h3>
            </section>
            <section className="overflow-hidden">
            <motion.p style={{whiteSpace: "pre-line"}}
            initial={{y:"100%",opacity:0}}
            animate={{
             y:0,
             opacity:1,
             transition:{duration: 0.65, ease: "easeInOut"}}}
            className="overflow-hidden text-md md:text-lg font-main font-light w-full"
            >
            {props.paragraph}
            </motion.p>
            </section>
            </article>
    )
}