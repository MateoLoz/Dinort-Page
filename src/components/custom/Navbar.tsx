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
    <nav className="w-[95vw] xl:w-[97vw] absolute top-8  h-12 flex flex-row">
        <ul className="xl:w-[90%] w-[73%] flex flex-row sm:gap-12 gap-2 justify-center items-center">
            <li className="mix-blend-difference text-main  font-s font-normal">{navbar.clients}</li>
            <li className="mix-blend-difference text-main font-s">{navbar.products}</li>
            <li className="mix-blend-difference text-main font-s">{navbar.aboutUs}</li>
           
        </ul>
        <ul className="xl:w-[10%] w-[27%] flex items-center  justify-end">
            <li className="md:mr-4">
            <button className=" font-s p-[8px] md:p-[12px] rounded-[40px] bg-btn-secondary">
            {navbar.contactUs}
            </button>
            </li>
        </ul>
    </nav>
    </div>
)
}