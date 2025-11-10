type FooterHeaderProps = {
    brand:string,
    location:string,
    email:string
}

export const FooterHeader = ({brand, location, email} : FooterHeaderProps) => {
    return(
        <section className="flex flex-col gap-2 ">
                <h2 className="lg:text-[26px] text-[22px] text-white font-main font-medium">{brand}</h2>
                <span className="lg:text-[16px] md:text-[14px] text-[12px] font-main font-normal text-gray-1">{location}</span>
                <span className="lg:text-[16px] md:text-[14px] text-[12px] font-main font-normal text-gray-1">{email}</span>
        </section>
    )
}