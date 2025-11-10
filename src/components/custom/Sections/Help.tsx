"use client"

import CustomAccordion from "../AccordionCustom"


type HelpProps = {
  title:string,
  accordion:{
    headers:{
      "item-1":string,
      "item-2":string,
      "item-3":string,
    },
    body:{
      "description-1":string,
      "description-2":string,
      "description-3":string,
    }
  }
}

export default function Help ({title,accordion}: HelpProps) {
    return(
      <div className="bg-help rounded-xl w-full flex xl:my-12 flex-col gap-4 lg:py-24 py-12 px-4">
       <header className="w-full flex justify-center items-center h-12S">
         <h2 className="text-white uppercase lg:text-[45px] md:text-[35px] text-xl">{title}</h2>
       </header>
        <CustomAccordion header={accordion.headers} body={accordion.body}/>
      </div>
   )

}