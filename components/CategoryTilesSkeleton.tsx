import { Skeleton } from "./ui/skeleton";

export function CategoryTilesSkeleton() {
  return (
    <section className="relative w-full py-2 sm:py-4">
      {/* Categories Grid/Scroll Skeleton */}
      <div className="relative">
        {/* Gradient Shadows mirrored */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent dark:from-zinc-950 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent dark:from-zinc-950 z-10 pointer-events-none" />

        <div className="flex gap-4 overflow-x-auto py-4 px-4 sm:px-6 lg:gap-6 scrollbar-hide">
          {[...Array(6)].map((_, i) => (
            <CategoryCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCardSkeleton() {
  return (
    <div className="relative h-40 w-64 shrink-0 overflow-hidden rounded-xl sm:h-48 sm:w-72 md:h-56 md:w-80 lg:h-64 lg:w-96">
      {/* Background Skeleton */}
      <Skeleton className="absolute inset-0 bg-zinc-800/80" />

      {/* Overlay Skeleton Effect */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

      {/* Icon Placeholder Skeleton in the center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Skeleton className="h-16 w-16 rounded-xl bg-zinc-600 sm:h-20 sm:w-20" />
      </div>

      {/* Content Skeleton at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Skeleton className="h-6 w-3/4 bg-zinc-700/60" />
        <Skeleton className="mt-2 h-4 w-1/3 bg-zinc-700/40" />
      </div>
    </div>
  );
}
