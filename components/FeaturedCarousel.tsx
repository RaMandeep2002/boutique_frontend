"use client";
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
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {validProducts.map((product, index) => (
            <CarouselItem key={product.id || index} className="pl-0">
              <div className="relative min-h-[450px] w-full md:min-h-[550px] lg:min-h-[650px]">
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
                <div className="relative flex h-full w-full items-center justify-center md:justify-end">
                  <div
                    className={cn(
                      "flex w-full flex-col justify-center",
                      // Mobile (default) - smallest screens
                      "max-w-sm p-4",
                      // Small phones landscape (480px+)
                      "xs:max-w-md xs:p-5",
                      // Tablets (640px+)
                      "sm:max-w-lg sm:p-6",
                      // Large tablets (768px+)
                      "md:max-w-2xl md:p-8 md:mr-8 md:mt-0",
                      // Desktops (1024px+)
                      "lg:max-w-3xl lg:p-10 lg:mr-12",
                      // Large desktops (1280px+)
                      "xl:max-w-4xl xl:p-12 xl:mr-16",
                      // Extra large (1536px+)
                      "2xl:max-w-5xl 2xl:p-14 2xl:mr-20",
                    )}
                  >
                    {/* Category Badge */}
                    {product.category && (
                      <div className="mb-2 animate-fade-in-up sm:mb-3 md:mb-4 lg:mb-5">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full font-medium backdrop-blur-sm ring-1 ring-amber-500/30",
                            "bg-amber-500/20 text-amber-400",
                            // Mobile
                            "px-2 py-0.5 text-[11px]",
                            // Small
                            "xs:px-2.5 xs:py-0.5 xs:text-xs",
                            // Tablet
                            "sm:px-3 sm:py-1 sm:text-xs",
                            // Desktop
                            "md:px-3 md:py-1 md:text-sm",
                            "lg:px-4 lg:py-1.5 lg:text-sm",
                            "xl:px-4 xl:py-1.5 xl:text-base",
                          )}
                        >
                          {product.category}
                        </span>
                      </div>
                    )}

                    {/* Title - Fluid typography with clamp */}
                    {product.title && (
                      <h2
                        className={cn(
                          "font-bold tracking-tight text-white animate-fade-in-up animation-delay-100",
                          // Mobile: 24px, Tablet: 36px, Desktop: 48px, Large: 60px
                          "text-[clamp(1.5rem,5vw,3.75rem)]",
                          "leading-[1.2] sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.1]",
                          // Fallback classes
                          "sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
                        )}
                      >
                        {product.title}
                      </h2>
                    )}

                    {/* Description */}
                    {product.description && (
                      <p
                        className={cn(
                          "leading-relaxed text-white/70 animate-fade-in-up animation-delay-200",
                          // Responsive margins and sizes
                          "mt-2 text-xs",
                          "xs:mt-2.5 xs:text-xs",
                          "sm:mt-3 sm:text-sm",
                          "md:mt-4 md:text-base",
                          "lg:mt-5 lg:text-lg lg:leading-relaxed",
                          "xl:mt-6 xl:text-xl",
                          "2xl:mt-6 2xl:text-2xl 2xl:leading-relaxed",
                          // Line clamping for different screens
                          "line-clamp-3",
                          "sm:line-clamp-4",
                          "md:line-clamp-5",
                          "lg:line-clamp-none",
                        )}
                      >
                        {product.description}
                      </p>
                    )}

                    {/* Price */}
                    {product.price && (
                      <div
                        className={cn(
                          "flex items-baseline gap-2 animate-fade-in-up animation-delay-300",
                          "mt-3",
                          "xs:mt-3.5",
                          "sm:mt-4",
                          "md:mt-5",
                          "lg:mt-6",
                          "xl:mt-7",
                          "2xl:mt-8",
                        )}
                      >
                        <span
                          className={cn(
                            "font-bold text-white",
                            "text-xl",
                            "xs:text-2xl",
                            "sm:text-2xl",
                            "md:text-3xl",
                            "lg:text-4xl",
                            "xl:text-5xl",
                            "2xl:text-6xl",
                          )}
                        >
                          {formatCurrency(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span
                            className={cn(
                              "text-white/40 line-through",
                              "text-xs",
                              "xs:text-xs",
                              "sm:text-sm",
                              "md:text-base",
                              "lg:text-lg",
                              "xl:text-xl",
                            )}
                          >
                            {formatCurrency(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Rating (Optional - Add if you have rating data) */}
                    {product.rating && (
                      <div
                        className={cn(
                          "flex items-center gap-1 animate-fade-in-up animation-delay-350",
                          "mt-2",
                          "sm:mt-3",
                          "md:mt-4",
                        )}
                      >
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={cn(
                                "fill-current",
                                i < Math.floor(product.rating ?? 0)
                                  ? "text-amber-400"
                                  : "text-white/20",
                                "h-3 w-3",
                                "sm:h-3.5 sm:w-3.5",
                                "md:h-4 md:w-4",
                              )}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span
                          className={cn(
                            "text-white/50",
                            "text-[10px]",
                            "sm:text-xs",
                            "md:text-sm",
                          )}
                        >
                          ({product.reviewCount || 0} reviews)
                        </span>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div
                      className={cn(
                        "flex animate-fade-in-up animation-delay-400",
                        "flex-col gap-2 mt-4",
                        "xs:flex-row xs:gap-2.5 xs:mt-5",
                        "sm:flex-row sm:gap-3 sm:mt-5",
                        "md:gap-4 md:mt-6",
                        "lg:gap-5 lg:mt-8",
                        "xl:gap-6 xl:mt-10",
                        "2xl:gap-8 2xl:mt-12",
                      )}
                    >
                      <button
                        className={cn(
                          "rounded-md font-semibold text-black transition-all duration-300",
                          "bg-white hover:bg-white/90 active:scale-95",
                          "hover:scale-105 hover:shadow-lg",
                          // Mobile
                          "px-4 py-2 text-sm",
                          // Small
                          "xs:px-5 xs:py-2 xs:text-sm",
                          // Tablet
                          "sm:px-5 sm:py-2.5 sm:text-sm",
                          // Desktop
                          "md:px-6 md:py-3 md:text-base",
                          "lg:px-8 lg:py-3.5 lg:text-base",
                          "xl:px-10 xl:py-4 xl:text-lg",
                          "2xl:px-12 2xl:py-5 2xl:text-xl",
                        )}
                      >
                        Shop Now →
                      </button>
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
