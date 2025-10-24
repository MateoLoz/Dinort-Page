"use client";

import Image from "next/image";
import logo from "@images/Group.svg";


type BannerProps = {
    bannerSmall:string
}

export default function Banner ({bannerSmall}: BannerProps) {
return(
    <div className=" z-0 rounded-xl bg-[var(--bannerPrimaryBackground)] w-full h-[75vh] flex flex-col gap-4 justify-center items-center">
        <Image
        className="z-0 flex justify-center items-center"
        width={400}
        src={logo}
        alt="Dinort Mecanizados S.A.S logo"
        />

        <aside className="absolute top-[72vh]  w-full px-8 md:px-10 flex justify-end">
            <small className="text-[var(--navbarPrimaryColor)]">
                {bannerSmall}
            </small>
        </aside>
    </div>
)
}