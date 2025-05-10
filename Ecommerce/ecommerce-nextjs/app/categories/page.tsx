import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export const metadata = {
  title: "Shop by Categories - NextShop",
  description: "Browse our products by category at NextShop",
};

export default function CategoriesPage() {
  // Get unique categories and count products in each
  const categories = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        name: product.category,
        count: 0,
        image: product.image
      };
    }
    acc[product.category].count += 1;
    return acc;
  }, {} as Record<string, { name: string; count: number; image: string }>);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(categories).map((category) => (
            <Link 
              href={`/products?category=${category.name}`} 
              key={category.name}
              className="group"
            >
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white text-xl font-bold mb-1">{category.name}</h2>
                  <p className="text-white/80 text-sm">{category.count} products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Shop by Category?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Organized Shopping</h3>
              <p className="text-gray-600 dark:text-gray-300">Find exactly what you're looking for by browsing specific product categories.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600 dark:text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600 dark:text-gray-300">Skip the endless scrolling and go directly to the products that interest you.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600 dark:text-purple-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discover New Products</h3>
              <p className="text-gray-600 dark:text-gray-300">Explore related items within categories that you might have missed otherwise.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}