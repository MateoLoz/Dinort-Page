import { Skeleton } from "@/components/ui/skeleton"

export const MachineCardSkeleton = () => {
    return(
        <article className="w-full h-auto flex flex-col gap-4">
        
        <figure className="bg-card-2 rounded-md w-full xl:h-[350px] h-[250px] flex justify-center items-center">
        <Skeleton className="xl:w-[240px] xl:h-[180px] md:w-[200px] h-[150px]  w-[180px] h-[130px]"/>
        </figure>
        <section className="w-full lg:px-4 px-2">
        <Skeleton className="w-full h-4"/>
        </section>
        <aside className="w-full lg:px-4 px-2">
        <Skeleton className="w-full h-4"/>
        <Skeleton className="w-full h-4"/>
        <Skeleton className="w-full h-4"/>
        <Skeleton className="w-full h-4"/>
        </aside>
    </article>
    )
}