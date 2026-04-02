import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0]?.asset.url || "/placeholder.jpg";
  const altText = product.images[0]?.asset.altText || product.title;

  return (
    <Card className="group overflow-hidden border-none bg-zinc-50 transition-all duration-500 hover:shadow-2xl dark:bg-zinc-900/50">
      <Link
        href={`/products/${product.slug}`}
        className="relative block w-full aspect-4/5 overflow-hidden bg-zinc-100 dark:bg-zinc-800"
      >
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
        <Badge className="absolute top-4 left-4 bg-white/90 text-black backdrop-blur-md hover:bg-white dark:bg-zinc-950/90 dark:text-zinc-50">
          {product.category}
        </Badge>
      </Link>

      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-2">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors duration-300">
              {product.title}
            </h3>
          </Link>
          <p className="font-bold text-lg">${product.price}</p>
        </div>
        <p className="mt-2 text-sm text-zinc-500 line-clamp-2 dark:text-zinc-400">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button className="w-full rounded-full bg-zinc-900 text-zinc-50 transition-all duration-300 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
