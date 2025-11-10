import { Skeleton } from "@/components/ui/skeleton";

export const ExperienceCardSkeleton = () => {
  return(
    <article className="bg-card md:h-50 sm:h-40 h-32 md:w-80 sm:w-50 w-44 rounded-md flex flex-col gap-2 justify-center items-center">
      <Skeleton className="w-20 h-12"/>
      <Skeleton className="w-32 h-4"/>
    </article>
  )
}