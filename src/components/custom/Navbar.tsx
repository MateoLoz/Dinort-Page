"use client"

type navbarProps = {
    navbar:{
    clients:string,
    products:string,
    aboutUs:string,
    contactUs:string,
    bannerSmall:string
    }
}

export default function NavBar ({navbar}:navbarProps) {
return(

<div className="w-full">
    <nav className="w-[95vw] xl:w-[97vw] fixed top-8  h-12 flex flex-row">
        <ul className="xl:w-[90%] w-[70%] flex flex-row sm:gap-12 gap-2 justify-center items-center">
            <li className="mix-blend-difference text-[var(--navbarPrimaryColor)] ">{navbar.clients}</li>
            <li className="mix-blend-difference text-[var(--navbarPrimaryColor)] ">{navbar.products}</li>
            <li className="mix-blend-difference text-[var(--navbarPrimaryColor)] ">{navbar.aboutUs}</li>
           
        </ul>
        <ul className="xl:w-[10%] w-[30%] flex items-center  justify-center sm:justify-end">
            <li>
            <button className="p-[6px] md:p-[12px] rounded-[40px] bg-[var(--btnSecondaryBackground)]">
            {navbar.contactUs}
            </button>
            </li>
        </ul>
    </nav>
    </div>
)
}