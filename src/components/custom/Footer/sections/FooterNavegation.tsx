import { LightArrow } from "@/icons/LightArrow"

type FooterNavegationProps = {
   title:string
    navegation_section:{
        "clients":string,
        "products":string,
        "companys":string,
        "about_us":string
    },
}

export const FooterNavegation = ({title, navegation_section} : FooterNavegationProps) => {
    return(

        <aside className="flex flex-col gap-2 text-center md:text-start">
                  
        <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
         {title}
        </h2>
        <ul className="flex flex-col gap-1">
            <li className="text-gray-2 font-main font-light font-normal text-[12px] md:text-[14px]">{navegation_section.clients}</li>
            <li className="text-gray-2 font-main font-light font-normal text-[12px] md:text-[14px]">{navegation_section.products}</li>
            <li className="text-gray-2 font-main font-light font-normal text-[12px] md:text-[14px]">{navegation_section.companys}</li>
            <li className="text-gray-2 font-main font-light font-normal text-[12px] md:text-[14px]">{navegation_section.about_us}</li>
        </ul>

        </aside>
    )
}

type FooterPoliticsProps = {
      title:string,
      politics_section:{
        "politics":string,
    }
}

export const FooterPolitics = ({title, politics_section} : FooterPoliticsProps) => {
    return(
        <aside className="flex flex-col gap-2 text-center md:text-start">          
        <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
         {title}
        </h2>
        <ul className="flex flex-col gap-1">
            <li className="text-gray-2 font-main font-light font-normal text-[12px] md:text-[14px]">{politics_section.politics}</li>
        </ul>
        </aside>
    )
}

type FooterSocialProps = {
    title:string,
    socials_section:{
        "wpp":string,
        "lnk":string,
        "ig":string
    }
}

export const FooterSocial = ({title, socials_section} : FooterSocialProps) =>  {
    return(
        <aside className="flex flex-col gap-2 text-center md:text-start">          
        <h2 className="lg:text-[22px] text-[18px] text-white font-main font-medium">
         {title}
        </h2>
        <ul className="flex flex-col gap-1 md:justify-start ">
            <li className="text-gray-2 font-main font-light font-normal text-[12px] md:text-[14px] flex flex-row items-center gap-1">
                {socials_section.wpp}
                <LightArrow width={12} height={12} transform="rotate(-45)"/>
                </li>
            <li className="text-gray-2 font-main font-light font-normal text-[12px] md:text-[14px] flex flex-row items-center gap-1">
                {socials_section.lnk}
                <LightArrow width={12} height={12} transform="rotate(-45)"/>
                </li>
            <li className="text-gray-2 font-main font-light font-normal text-[12px] md:text-[14px] flex flex-row items-center gap-1">
                {socials_section.ig}
                <LightArrow width={12} height={12} transform="rotate(-45)"/>
                </li>
        </ul>
        </aside>
    )
}