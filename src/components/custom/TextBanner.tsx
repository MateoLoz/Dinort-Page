"use client";
import { Query } from "@tanstack/react-query";

type TextBannerProps = {
    title:string
}

export default function TextBanner ({title}: TextBannerProps) {

    return(
        <div className="bg-none w-full h-[35vh] flex justify-center items-center">
           <h2>{title}</h2>
        </div>
    )
}