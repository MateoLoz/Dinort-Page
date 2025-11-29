import { Skeleton } from "@/components/ui/skeleton"

 const SliderSkeleton = () => {
return(
<div className="h-[15vh] flex justify-center items-center">
      <div className="carousel">
        <div className="group">
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
        </div>
        <div aria-hidden className="group">
        <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
          <Skeleton className="w-24 h-20 rounded-md bg-gray-400"/>
        </div>
      </div>
    </div>
)
}


export default SliderSkeleton;
