import Link from "next/link";
import React from "react";
import CartIndicator from "./CartIndicator";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar with announcement or promo */}
          <div className="bg-blue-600 text-white text-center text-sm py-2 -mx-4 sm:-mx-6 lg:-mx-8">
            Free shipping on all orders over $50 | Use code WELCOME10 for 10% off your first order
          </div>
          
          {/* Main header */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NextShop
              </span>
            </Link>
            
            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Products
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Categories
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                About
              </Link>
            </nav>
            
            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Search button */}
              <button 
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              
              {/* User account */}
              <button 
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Account"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </button>
              
              {/* Cart indicator */}
              <CartIndicator />
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile navigation - hidden by default */}
          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Products
              </Link>
              <Link 
                href="/categories" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Categories
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2023 NextShop. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:underline">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:underline">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}