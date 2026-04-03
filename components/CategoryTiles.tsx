"use client";

import { Grid2X2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  productCount?: number;
  icon?: React.ReactNode;
}

interface CategoryTilesProps {
  categories?: Category[];
  activeCategory?: string;
}

export default function CategoryTiles({ 
  categories = defaultCategories,
  activeCategory 
}: CategoryTilesProps) {
  return (
    <section className="relative w-full py-2 sm:py-4">
      {/* Categories Grid/Scroll */}
      <div className="relative">
        {/* Gradient Shadows for Scroll Indication */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent dark:from-zinc-950 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent dark:from-zinc-950 z-10 pointer-events-none" />
        
        <div className="flex gap-4 overflow-x-auto py-4 px-4 sm:px-6 lg:gap-6 scrollbar-hide">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              category={category}
              isActive={activeCategory === category.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, isActive }: { category: Category; isActive: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={`group relative flex-shrink-0 transition-all duration-300 ${
        isActive
          ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950"
          : "hover:ring-2 hover:ring-amber-500/50 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-zinc-950"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40 w-64 overflow-hidden rounded-xl sm:h-48 sm:w-72 md:h-56 md:w-80 lg:h-64 lg:w-96">
        {/* Background Image or Gradient */}
        {category.imageUrl ? (
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 dark:from-zinc-600 dark:to-zinc-800" />
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:via-black/20" />
        
        {/* Icon/Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-all duration-300 group-hover:scale-110 group-hover:opacity-40">
          {category.icon || <Grid2X2 className="h-16 w-16 text-white sm:h-20 sm:w-20" />}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-bold transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
            {category.name}
          </h3>
          {category.productCount !== undefined && (
            <p className="mt-1 text-xs text-white/80 transition-all duration-300 group-hover:text-white sm:text-sm">
              {category.productCount} Products
            </p>
          )}
        </div>

        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </div>
    </Link>
  );
}

// Default categories with images (replace with your actual data)
const defaultCategories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=400&fit=crop",
    productCount: 245,
  },
  {
    id: "2",
    name: "Fashion",
    slug: "fashion",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop",
    productCount: 532,
  },
  {
    id: "3",
    name: "Home & Living",
    slug: "home-living",
    imageUrl: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&h=400&fit=crop",
    productCount: 189,
  },
  {
    id: "4",
    name: "Sports",
    slug: "sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop",
    productCount: 167,
  },
  {
    id: "5",
    name: "Books",
    slug: "books",
    imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&h=400&fit=crop",
    productCount: 893,
  },
  {
    id: "6",
    name: "Toys & Games",
    slug: "toys-games",
    imageUrl: "https://images.unsplash.com/photo-1760007417512-a70cb7b8aae5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productCount: 234,
  },
  {
    id: "7",
    name: "Electronics",
    slug: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=400&fit=crop",
    productCount: 245,
  },
  {
    id: "8",
    name: "Fashion",
    slug: "fashion",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop",
    productCount: 532,
  },
  {
    id: "9",
    name: "Home & Living",
    slug: "home-living",
    imageUrl: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&h=400&fit=crop",
    productCount: 189,
  },
  {
    id: "10",
    name: "Sports",
    slug: "sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop",
    productCount: 167,
  },
  {
    id: "11",
    name: "Books",
    slug: "books",
    imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&h=400&fit=crop",
    productCount: 893,
  },
  {
    id: "12",
    name: "Toys & Games",
    slug: "toys-games",
    imageUrl: "https://images.unsplash.com/photo-1760007417512-a70cb7b8aae5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productCount: 234,
  },
];