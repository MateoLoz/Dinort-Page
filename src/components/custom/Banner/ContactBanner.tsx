"use client"

type ContactBannerProps = {
    title?:string,
    subtitle?:string
}

const ContactBanner = ( {title,subtitle}: ContactBannerProps) => {
     
    return(
       <section className="w-full min-h-[60vh] bg-banner-2 flex flex-col gap-2 justify-center items-center px-12 md:px-24">
           <h2 className="text-center font-main font-medium text-[30px] md:text-[40px] lg:text-[60px] text-yellow-1 uppercase">{title}</h2>
           <span className="text-center font-main font-light text-white text-[14px] md:text-[18px]">{subtitle}</span>
       </section>
    )
}

export default ContactBanner