import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/CurrenctFormat";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0]?.asset.url || "/placeholder.jpg";
  const altText = product.images[0]?.asset.altText || product.title;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl dark:bg-zinc-900/40">
      {/* Image Section */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-4/5 overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Category Badge - Top Left */}
        <div className="absolute left-3 top-3">
          <Badge className="rounded-full bg-linear-to-r from-zinc-900 to-zinc-800 px-3 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-md dark:from-white dark:to-zinc-200 dark:text-zinc-900 sm:text-xs">
            {product.category || "General"}
          </Badge>
        </div>

        {/* Thumbnail Preview (Optional/Decorative) */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {product.images.slice(0, 2).map((img, i) => (
              <div key={i} className="h-10 w-14 overflow-hidden rounded-md border border-white/50 bg-white/30 backdrop-blur-sm">
                <Image src={img.asset.url} alt="preview" width={56} height={40} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </Link>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-1">
          <Link href={`/products/${product.slug}`}>
            <h3 className="line-clamp-1 text-base font-medium text-zinc-900 transition-colors duration-300 group-hover:text-zinc-600 dark:text-zinc-100 sm:text-lg">
              {product.title}
            </h3>
          </Link>
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="mb-3 flex items-center gap-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3 fill-current",
                    i < Math.floor(product.rating || 0)
                      ? "text-amber-500"
                      : "text-zinc-200 dark:text-zinc-700"
                  )}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 sm:text-xs">
              ({product.reviewCount})
            </span>
          </div>
        )}

        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {formatCurrency(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-zinc-400 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
          
          {/* Stock Level (Optional) */}
          {product.stockLevel && product.stockLevel < 10 && (
             <span className="ml-auto rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
               Only {product.stockLevel} left
             </span>
          )}
        </div>

        <div className="mt-auto">
          <Button className="w-full gap-2 rounded-xl bg-zinc-900 py-6 text-sm font-semibold text-zinc-50 transition-all duration-300 hover:bg-zinc-800 active:scale-95 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
            <ShoppingBag className="h-4 w-4" />
            Add to Basket
          </Button>
        </div>
      </div>
    </div>
  );
}
