"use client";

import { Skeleton } from "@/components/ui/skeleton";

const MachineTagSkeleton = () => {
    return(
        <article className="bg-card-3 flex text-center items-center justify-center px-2 py-4 rounded-3xl">
          <Skeleton className="h-4 w-20"/>
        </article>
    )
}

export default MachineTagSkeleton