"use client";

import Anchor from "../Link/Anchor";
import Button from "../Button/Button";
import Hamburger from "@/icons/Hamburger";
import { useState, useRef } from "react";

type navbarProps = {
  navbar: {
    clients: string;
    products: string;
    aboutUs: string;
    contactUs: string;
    bannerSmall: string;
  };
};

export function DesktopNavBar({ navbar }: navbarProps) {
  return (
    <div className="w-full">
      <nav className="w-[95vw] xl:w-[97vw] absolute top-8  h-12 flex flex-row">
        <ul className="xl:w-[90%] w-[73%] flex flex-row sm:gap-12 gap-2 justify-center items-center">
          <li className="inline-block overflow-hidden">
            <Anchor.flip href="#clients">{navbar.clients}</Anchor.flip>
          </li>
          <li className="inline-block overflow-hidden">
            <Anchor.flip href="#product">{navbar.products}</Anchor.flip>
          </li>
          <li className="inline-block overflow-hidden">
            <Anchor.flip href="#about-us">{navbar.aboutUs}</Anchor.flip>
          </li>
        </ul>
        <ul className="xl:w-[10%] w-[27%] flex items-center  justify-end md:mr-4">
          <li className="inline-block overflow-hidden hover:scale-[1.03] transition">
            <Button.navbar>{navbar.contactUs}</Button.navbar>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const MobileNavBar = ({ navbar }: navbarProps) => {
  const [menu, setMenu] = useState(false);



  return (
    <div className="overflow-hidden box-border mx-4 z-10 inset-x-0 min-h-10 fixed top-6 flex flex-col gap-2 justify-center items-center  bg-blend-mode-difference bg-[rgba(0,30,65,0.47)] rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border border-[rgba(0,30,65,0.3)] transition-height ease-in-out">
      <header
        className={`w-full h-8 px-2 pt-4 flex items-center justify-end`}
      >
        <Hamburger setMenu={setMenu} menu={menu} />
      </header>

      <ul
        className={`
          relative top-0
          overflow-hidden
          transition-all duration-300
          ${menu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          px-2 pb-2 w-full flex flex-col justify-center items-center gap-2
        `}
      >
        <li  className="w-full font-main font-normal text-center text-gray-200 active:text-white p-2 border-b"> <a href="#clients">{navbar.clients}</a></li>
        <li className="w-full font-main font-normal text-center text-gray-200 active:text-white p-2 border-b"> <a href="#product">{navbar.products}</a></li>
        <li className="w-full font-main font-normal text-center text-gray-200 active:text-white p-2 border-b"> <a href="#about-us"> {navbar.aboutUs}</a></li>
        <li className="w-full font-main font-normal text-center text-gray-200 active:text-white p-2">{navbar.contactUs}</li>
      </ul>
    </div>
  );
};

const NavBar = ({ navbar }: navbarProps) => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavBar navbar={navbar} />
      </div>

      <div className="block md:hidden">
        <MobileNavBar navbar={navbar} />
      </div>
    </>
  );
};

export default NavBar;
