"use client";

import { useState } from "react";
import { Search, X, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col gap-8">
      {/* Filters Toggle for Mobile */}
      <div className="flex items-center justify-between lg:hidden">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => setIsVisible(!isVisible)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          {isVisible ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {isVisible && (
        <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
          {/* Active Filter Badge */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900/30 dark:bg-amber-900/10">
            <p className="text-xs font-medium text-amber-800 dark:text-amber-400">1 filter applied</p>
            <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 h-9 w-full justify-center gap-2 bg-amber-500 font-bold text-white hover:bg-amber-600 hover:text-white dark:bg-amber-600 dark:hover:bg-amber-700"
            >
              <X className="h-4 w-4" />
              Clear All Filters
            </Button>
          </div>

          {/* Search */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Search</h4>
            <div className="flex gap-2">
               <div className="relative flex-1">
                 <Input 
                   placeholder="Search products..." 
                   className="h-11 rounded-lg border-zinc-200 bg-white pl-4 dark:border-zinc-800 dark:bg-zinc-950"
                 />
               </div>
               <Button className="h-11 bg-zinc-900 px-4 font-bold text-white dark:bg-zinc-50 dark:text-zinc-900">
                 Search
               </Button>
            </div>
          </div>

          {/* Category */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Category</h4>
              <Badge variant="secondary" className="bg-amber-500 text-white hover:bg-amber-500">Active</Badge>
            </div>
            <Select defaultValue="beds">
              <SelectTrigger className="h-11 rounded-lg border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="beds">Beds</SelectItem>
                <SelectItem value="lighting">Lighting</SelectItem>
                <SelectItem value="sofas">Sofas</SelectItem>
                <SelectItem value="chairs">Chairs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Color */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Color</h4>
            <Select>
              <SelectTrigger className="h-11 rounded-lg border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <SelectValue placeholder="All Colors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Colors</SelectItem>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="grey">Grey</SelectItem>
                <SelectItem value="brown">Brown</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Material */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Material</h4>
            <Select>
              <SelectTrigger className="h-11 rounded-lg border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <SelectValue placeholder="All Materials" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Materials</SelectItem>
                <SelectItem value="wood">Wood</SelectItem>
                <SelectItem value="metal">Metal</SelectItem>
                <SelectItem value="velvet">Velvet</SelectItem>
                <SelectItem value="leather">Leather</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Price Range: £{priceRange[0]} - £{priceRange[1]}
            </h4>
            <Slider
              defaultValue={[0, 5000]}
              max={10000}
              step={100}
              value={priceRange}
              onValueChange={(val) => setPriceRange(val as number[])}
              className="py-4"
            />
          </div>

          {/* Availability */}
          <div className="flex items-center space-x-3">
            <Checkbox id="stock" className="h-5 w-5 rounded border-zinc-300 data-[state=checked]:bg-zinc-900 dark:border-zinc-700 dark:data-[state=checked]:bg-zinc-50" />
            <label
              htmlFor="stock"
              className="text-sm font-medium leading-none text-zinc-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-zinc-300"
            >
              Show only in-stock
            </label>
          </div>

          {/* Sort By */}
          <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Sort By</h4>
            <Select defaultValue="name-asc">
              <SelectTrigger className="h-11 rounded-lg border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}
