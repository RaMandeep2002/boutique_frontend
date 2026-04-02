import FeaturedCarousel from "@/components/FeaturedCarousel";
import ProductCard from "@/components/ProductCard";
import { mockLadySuits } from "@/lib/mock-data";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedCarousel products={mockLadySuits} />
      </Suspense>
      
      <main className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Curated Essentials
            </h2>
            <p className="max-w-[600px] text-zinc-500 transition-colors duration-300 dark:text-zinc-400 md:text-lg">
              Handpicked selection of premium products designed for quality and style.
            </p>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-zinc-900 transition-all duration-300 hover:text-zinc-500 dark:text-zinc-50 dark:hover:text-zinc-300"
          >
            Explore all Products
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockLadySuits.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <section className="bg-zinc-900 py-16 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Ready for a better experience?</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">Join our community and get access to exclusive drops and premium content.</p>
          <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-zinc-900 transition-transform duration-300 active:scale-95 hover:bg-zinc-200">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}
