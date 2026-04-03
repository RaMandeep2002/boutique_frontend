"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User, Box } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
          Reetu boutique
          </span>
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Products
              </Link>
            </li>
          </ul>
        </nav> */}

        {/* Right Side Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <Button className="flex items-center gap-2 p-2 px-5 text-white bg-zinc-800 hover:bg-zinc-950 transition-colors">
            <Box className="h-5 w-5" />
            <span className="text-sm font-medium">Your Order</span>
          </Button>
          {/* <Button className="flex items-center gap-2 p-2 px-5 text-white bg-amber-400 hover:bg-amber-500 transition-colors">
            <User className="h-5 w-5" />
            <span className="text-sm font-medium transition-colors">Account</span>
          </Button> */}
          <button className="relative rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
              5
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li className="pt-2">
                <div className="flex items-center space-x-4">
                  <button className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                    <User className="h-5 w-5" />
                  </button>
                  <button className="relative rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
                      0
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
