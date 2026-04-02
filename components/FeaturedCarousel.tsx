"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Product } from "@/lib/mock-data";
import { Badge } from "./ui/badge";
import { formatCurrency } from "@/lib/CurrenctFormat";

interface FeaturedCarouselProps {
  products?: Product[];
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Filter products that have at least one image
  const validProducts = (products ?? []).filter(
    (product) => product.images?.[0]?.asset?.url,
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  // If no products with images, show placeholder
  if (validProducts.length === 0) {
    return (
      <div className="relative w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="flex min-h-[400px] items-center justify-center md:min-h-[450px] lg:min-h-[500px]">
          <p className="text-white/60">No featured products available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 5000,
        //     stopOnInteraction: false,
        //     stopOnMouseEnter: true,
        //   }),
        // ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {validProducts.map((product, index) => (
            <CarouselItem key={product.id || index} className="pl-0">
              <div className="relative min-h-[450px] w-full md:min-h-[500px] lg:min-h-[550px]">
                {/* Full Size Image */}
                <div className="absolute inset-0 bg-zinc-900">
                  <Image
                    src={product.images?.[0]?.asset?.url || ""}
                    alt={
                      product.images?.[0]?.asset?.altText ||
                      product.title ||
                      "Featured product"
                    }
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>

                {/* Gradient Overlay on Right Side */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/95 md:via-zinc-900/50 md:to-zinc-900/95 dark:to-zinc-950/95" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/95 md:via-zinc-900/50 md:to-zinc-900/95 dark:to-zinc-950/95" />

                {/* Text Content Container - Positioned on Right Side */}
                <div className="relative flex h-full w-full items-center justify-end">
                  <div className="flex w-full max-w-md flex-col justify-center p-6 md:max-w-lg md:p-8 lg:max-w-4xl lg:p-12 lg:mt-5">
                    {/* Category Badge */}
                    {product.category && (
                      <div className="mb-3 animate-fade-in-up md:mb-4">
                        <span className="inline-flex items-center rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400 backdrop-blur-sm ring-1 ring-amber-500/30">
                          {product.category}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    {product.title && (
                      <h2 className="text-4xl font-bold tracking-tight text-white animate-fade-in-up animation-delay-100 sm:text-3xl md:text-4xl lg:text-5xl">
                        {product.title}
                      </h2>
                    )}

                    {/* Description */}
                    {product.description && (
                      <p className="mt-3 text-sm leading-relaxed text-white/80 animate-fade-in-up animation-delay-200 md:mt-4 md:text-base lg:text-lg">
                        {product.description}
                      </p>
                    )}

                    {/* Price */}
                    {product.price && (
                      <div className="mt-4 flex items-baseline gap-2 animate-fade-in-up animation-delay-300 md:mt-5">
                        <span className="text-2xl font-bold text-white md:text-3xl">
                          {formatCurrency(product.price)}
                        </span>
                        {product.price && (
                          <span className="text-sm text-white/50 line-through">
                            {formatCurrency(product.price)}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Rating */}

                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-col gap-2 animate-fade-in-up animation-delay-400 sm:flex-row md:mt-8">
                      <button className="rounded-md bg-white px-6 py-2.5 text-md font-semibold text-black transition-all hover:bg-white/90 hover:scale-105 md:px-8 md:py-3">
                        Shop Now →
                      </button>
                      {/* <button className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 md:px-8 md:py-3">
                        Learn More
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 border-zinc-700 bg-zinc-800/80 text-white hover:bg-zinc-700 hover:text-white sm:left-8" />
        <CarouselNext className="right-4 border-zinc-700 bg-zinc-800/80 text-white hover:bg-zinc-700 hover:text-white sm:right-8" />
      </Carousel>

      {/* Dots Navigation */}
      {count > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                current === index + 1
                  ? "w-6 bg-white"
                  : "bg-white/50 hover:bg-white/70",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Optional: Standalone FeaturedSlider component if you need it separately
interface FeaturedSliderProps {
  imageUrl?: string;
  altText?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function FeaturedSlider({
  imageUrl,
  altText = "Featured image",
  title,
  description,
  className,
}: FeaturedSliderProps) {
  return (
    <div
      className={cn(
        "flex min-h-[400px] flex-col md:min-h-[450px] md:flex-row lg:min-h-[500px]",
        className,
      )}
    >
      <div className="relative h-64 w-full md:h-auto md:w-3/4">
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover"
              priority
            />
            {/* Optional overlay with text */}
            {(title || description) && (
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {title && <h3 className="text-2xl font-bold">{title}</h3>}
                  {description && (
                    <p className="mt-1 text-sm text-white/80">{description}</p>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-zinc-800">
            <p className="text-gray-500 dark:text-gray-400">
              No image available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
