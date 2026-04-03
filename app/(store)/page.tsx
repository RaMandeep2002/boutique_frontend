import CategoryTiles from "@/components/CategoryTiles";
import { CategoryTilesSkeleton } from "@/components/CategoryTilesSkeleton";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import { FeaturedCarouselSkeleton } from "@/components/FeaturedCarouselSkeleton";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { mockPunjabiSuits } from "@/lib/mock-data";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-zinc-950/50 transition-colors duration-500">
      <Suspense fallback={<FeaturedCarouselSkeleton />}>
        <FeaturedCarousel products={mockPunjabiSuits} />
      </Suspense>

      <div className="bg-white dark:bg-zinc-950 pb-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Shop
          </h1>
          <p className="mt-1 text-md text-zinc-600 transition-colors duration-300 dark:text-zinc-400">
            Premium Quality Products
          </p>
        </div>
      </div>

      {/* <div className="mb-8">
        <Suspense fallback={<CategoryTilesSkeleton />}>
          <CategoryTiles />
        </Suspense>
      </div> */}

      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Sidebar - Filters */}
          <aside className="w-full shrink-0 lg:w-72 xl:w-80">
            <div className="sticky top-24">
              <ProductFilters />
            </div>
          </aside>

          {/* Main Content - Products */}
          <div className="flex-1">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-zinc-100 pb-8 dark:border-zinc-800 md:flex-row md:items-end">
              <div className="space-y-1">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {mockPunjabiSuits.length} products found
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Curated Essentials
                </h2>
              </div>
              <Link
                href="/products"
                className="group flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-zinc-900 transition-all duration-300 hover:text-zinc-500 dark:text-zinc-50 dark:hover:text-zinc-300"
              >
                Explore all Products
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {mockPunjabiSuits.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <section className="bg-zinc-900 py-16 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready for a better experience?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Join our community and get access to exclusive drops and premium
            content.
          </p>
          <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-zinc-900 transition-transform duration-300 active:scale-95 hover:bg-zinc-200">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}
