"use client";

import '../../app/globals.css';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


type AccordionProps = {
    header:{
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


export default function CustomAccordion  ({header,body}: AccordionProps)  {

return(
    <Accordion
    type="single"
    collapsible
    className="w-full"
  >
    <AccordionItem className="lg:p-8 md:p-4 p-2" value="item-1">
      <AccordionTrigger className="font-t font-bold lg:text-3xl md:text-xl text-md text-white">{header["item-1"]}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <p className="font-main font-normal lg:text-xl text-lg text-white">
        {body["description-1"]}
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem className="lg:p-8 md:p-4 p-2" value="item-2">
      <AccordionTrigger className="font-t font-bold lg:text-3xl md:text-xl text-md text-white">{header["item-2"]}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 ">
        <p className="font-main font-normal lg:text-xl text-lg text-white">
        {body["description-2"]}
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem className="lg:p-8 md:p-4 p-2" value="item-3">
      <AccordionTrigger className="font-t font-bold lg:text-3xl md:text-xl text-md text-white">{header["item-3"]}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <p className="font-main font-normal lg:text-xl text-lg text-white">
        {body["description-3"]}
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

}
