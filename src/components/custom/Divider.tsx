"use client";

type DividerProps = {
    title: string
    alignment:string,
}

export default function Divider ({title,alignment}: DividerProps) {
return(
    <aside className={`w-full flex justify-${alignment} h-4`}>
      <span className="text-[var(--headerPrimaryColor)]">({title})</span>
    </aside>
)
}