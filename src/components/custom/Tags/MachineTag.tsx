
import MachineTagSkeleton from "../Skeletons/Tags/MachineTag.skeleton";

type MachineTagProps = React.ComponentProps<"h2">

const MachineTag = ({children,...props} : MachineTagProps) => {
    return(
        <article className="bg-card-3 flex text-center items-center justify-center px-2 py-4 rounded-3xl">
           <h2 {...props}>
           {children}
           </h2>
        </article>
    )
}

const Tag = {
    Machine:MachineTag,
    skeleton:MachineTagSkeleton,
}

export default Tag;