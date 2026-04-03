import { Skeleton } from "./ui/skeleton";

export function FeaturedCarouselSkeleton() {
  return (
    <div className="relative w-full overflow-hidden bg-zinc-900 dark:bg-zinc-950">
      <div className="relative min-h-[450px] w-full md:min-h-[550px] lg:min-h-[650px]">
        {/* Full Size Image Skeleton */}
        <div className="absolute inset-0">
          <Skeleton className="h-full w-full rounded-none bg-zinc-800" />
        </div>

        {/* Gradient Overlay mirroring the actual component */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/95 md:via-zinc-900/50 md:to-zinc-900/95 dark:to-zinc-950/95" />

        {/* Text Content Container */}
        <div className="relative flex h-full w-full items-center justify-center md:justify-end">
          <div className="flex w-full max-w-sm flex-col justify-center p-4 xs:max-w-md xs:p-5 sm:max-w-lg sm:p-6 md:mr-8 md:mt-0 md:max-w-2xl md:p-8 lg:mr-12 lg:max-w-3xl lg:p-10 xl:mr-16 xl:max-w-4xl xl:p-12 2xl:mr-20 2xl:max-w-5xl">
            {/* Category Badge Skeleton */}
            <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5">
              <Skeleton className="h-6 w-24 rounded-full bg-zinc-700/50" />
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-10 w-3/4 bg-zinc-700/50 sm:h-12 md:h-16 lg:h-20" />
              <Skeleton className="h-10 w-1/2 bg-zinc-700/50 sm:h-12 md:h-16 lg:h-20" />
            </div>

            {/* Description Skeleton */}
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full bg-zinc-700/50" />
              <Skeleton className="h-4 w-[90%] bg-zinc-700/50" />
              <Skeleton className="h-4 w-[95%] bg-zinc-700/50 sm:hidden md:block" />
            </div>

            {/* Price Skeleton */}
            <div className="mt-6 flex items-baseline gap-2">
              <Skeleton className="h-10 w-32 bg-zinc-700/50 md:h-12 lg:h-14" />
              <Skeleton className="h-6 w-20 bg-zinc-700/50" />
            </div>

            {/* Rating Skeleton */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-4 bg-zinc-700/50" />
                ))}
              </div>
              <Skeleton className="h-4 w-16 bg-zinc-700/50" />
            </div>

            {/* Buttons Skeleton */}
            <div className="mt-6 flex flex-col gap-2 xs:flex-row sm:gap-3 md:mt-8 lg:mt-10">
              <Skeleton className="h-12 w-full bg-zinc-700/50 xs:w-40 md:h-14 md:w-48" />
              <Skeleton className="h-12 w-full border border-zinc-700/50 bg-zinc-800/30 xs:w-40 md:h-14 md:w-48" />
            </div>
          </div>
        </div>

        {/* Dots Navigation Skeleton */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          <Skeleton className="h-2 w-6 rounded-full bg-zinc-600" />
          <Skeleton className="h-2 w-2 rounded-full bg-zinc-700" />
          <Skeleton className="h-2 w-2 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>
  );
}
