import { Skeleton } from "@/components/ui/skeleton"

export const AboutParagraphSkeleton = () => {
    return(
       <div className="w-full flex flex-col gap-4">
          <Skeleton className="w-full h-4"/>
          <Skeleton className="w-[85%] h-4"/>
          <Skeleton className="w-[80%]h-4"/>
          <Skeleton className="w-[75%] h-4"/>
          <Skeleton className="w-[70%] h-4"/>
       </div>
    )
}
