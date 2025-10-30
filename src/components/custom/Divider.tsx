"use client";

import Arrow from "@/icons/Arrow";

type DividerProps = {
    title: string
    alignment:string,
    leftArrow?: true | false,
    rightArrow?: true | false,
    bothArrows?: true | false,
}

export default function Divider ({title,alignment, leftArrow, rightArrow, bothArrows}: DividerProps) {

if(leftArrow) return (

  <aside className={`w-full flex gap-1 justify-${alignment} items-center h-8 mb-4`}>
    <Arrow fill="#555" width={18} height={18}/>
      <span className="text-[var(--headerPrimaryColor)]">({title})</span>
    </aside>
)

if(rightArrow) return (

  <aside className={`w-full flex gap-1 justify-${alignment} items-center  h-8 mb-4`}>
      <span className="text-[var(--headerPrimaryColor)]">({title})</span>
      <Arrow fill="#555" width={18} height={18}/>
    </aside>
)

if(bothArrows) return (

  <aside className={`w-full flex gap-1 justify-${alignment} items-center h-8 mb-4`}>
      <Arrow fill="#555" width={18} height={18}/>
      <span className="text-[var(--headerPrimaryColor)]">({title})</span>
      <Arrow fill="#555" width={18} height={18}/>
    </aside>
)

return(
    <aside className={`w-full flex justify-${alignment} h-12 mb-4`}>
      <span className="text-divider">({title})</span>
    </aside>
)
}