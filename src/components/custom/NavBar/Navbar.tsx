"use client"

import Anchor from "../Link/Anchor"
import Button from "../Button/Button"
import Hamburger from "@/icons/Hamburger"


type navbarProps = {
    navbar:{
    clients:string,
    products:string,
    aboutUs:string,
    contactUs:string,
    bannerSmall:string
    }
}

export  function DesktopNavBar ({navbar}:navbarProps) {
return(

<div className="w-full">
    <nav className="w-[95vw] xl:w-[97vw] absolute top-8  h-12 flex flex-row">
        <ul className="xl:w-[90%] w-[73%] flex flex-row sm:gap-12 gap-2 justify-center items-center">
            <li className="inline-block overflow-hidden"> 
            <Anchor.flip href="#clients">
             {navbar.clients}
             </Anchor.flip>
            </li>
            <li className="inline-block overflow-hidden"> 
            <Anchor.flip href="#product">
             {navbar.products}
             </Anchor.flip>
            </li>
            <li className="inline-block overflow-hidden">
             <Anchor.flip href="#about">
             {navbar.aboutUs}
             </Anchor.flip>
            </li>
           
        </ul>
        <ul className="xl:w-[10%] w-[27%] flex items-center  justify-end">
            <li className="md:mr-4 inline-block overflow-hidden hover:scale-[1.03] transition">
            <Button.navbar>
                {navbar.contactUs}
            </Button.navbar>
            </li>
        </ul>
    </nav>
    </div>
)
}


const MobileNavBar = () => {
    return(
        <div className="box-border mx-4 z-10 inset-x-0 min-h-16 fixed top-6 flex justify-end items-center rounded-md bg-blend-mode-difference bg-[rgba(0,30,65,0.47)] rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border border-[rgba(0,30,65,0.3)]">
            <Hamburger/>
        </div>
    )
} 


const NavBar = ({navbar}:navbarProps) => {
    return(
        <>
        <div className="hidden md:block">
        <DesktopNavBar navbar={navbar} />
      </div>
      
      <div className="block md:hidden">
        <MobileNavBar />
      </div>
      </>
    )
   
}

export default NavBar;