"use client";
import { Query } from "@tanstack/react-query";

type TextBannerProps = {
    title:string
    subtitle:string
}

export default function TextBanner ({title, subtitle}: TextBannerProps) {

    return(
        <div className="bg-none w-full h-[40vh] flex flex-col gap-2 justify-center items-center">
           <h2 className="font-main font-light uppercase xl:text-6xl md:text-5xl sm:text-4xl text-2xl">{title}</h2>
           <h2 className="font-main font-light uppercase xl:text-6xl md:text-5xl sm:text-4xl text-2xl">{subtitle}</h2>
        </div>
    )
}