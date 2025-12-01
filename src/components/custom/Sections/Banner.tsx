"use client";

import Image from "next/image";
import logo from "@images/Group.svg";

type BannerProps = {
  bannerSmall: string;
};

function Banner({ bannerSmall }: BannerProps) {
  return (
    <div className=" z-0 rounded-xl bg-[var(--bannerPrimaryBackground)] w-full h-[50vh] sm:h-[70vh] md:h-[90vh] flex flex-col gap-4 justify-center items-center">
      <Image
        className="z-0 flex justify-center items-center px-16 md:px-4 lg:px-0"
        width={400}
        loading="lazy"
        src={logo}
        alt="Dinort Mecanizados S.A.S logo"
      />

      <aside className="absolute top-[46vh] sm:top-[66vh] md:top-[86vh]  w-full px-8 md:px-10 flex justify-end">
        <small className="text-[var(--navbarPrimaryColor)] font-s uppercase">
          {bannerSmall}
        </small>
      </aside>
    </div>
  );
}

export default Banner;
