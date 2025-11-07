import Arrow from "@/icons/Arrow";

type DividerProps = {
    title: string
    alignment:string,
   
}

const LeftDivider = ({alignment, title}: DividerProps) => {
  return(
    <aside className={`w-full flex gap-1 justify-${alignment} items-center h-8 mb-4 pl-4`}>
    <Arrow fill="#555" width={18} height={18}/>
      <span className="text-[var(--headerPrimaryColor)]">({title})</span>
    </aside>
  )
}

const RightDivider = ({alignment, title}: DividerProps) => {
  return(
  <aside className={`w-full flex gap-1 justify-${alignment} items-center  h-8 mb-4 pl-4`}>
  <span className="text-[var(--headerPrimaryColor)]">({title})</span>
  <Arrow fill="#555" width={18} height={18}/>
</aside>
  )
}

const PrimaryDividiver = ({alignment, title}: DividerProps) => {
  return(
    <aside className={`w-full flex gap-1 justify-${alignment} items-center h-8 mb-4 pl-4`}>
    <Arrow fill="#555" width={18} height={18}/>
    <span className="text-[var(--headerPrimaryColor)]">({title})</span>
    <Arrow fill="#555" width={18} height={18}/>
  </aside>
  )
}

const SecondaryDivider = ({alignment, title}: DividerProps) => {
  return(
    <aside className={`w-full flex justify-${alignment} h-12 mb-4 pl-4`}>
      <span className="text-divider">({title})</span>
    </aside>
)
}

const Divider = {
  primary:PrimaryDividiver,
  secondary:SecondaryDivider,
  left:LeftDivider,
  right:RightDivider
}

export default Divider