import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";

export default function Home() {
  // Get featured products (highest rated)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-16">
        <div className="container mx-auto py-20 px-6 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to NextShop</h1>
            <p className="text-lg mb-8">Discover premium products with exceptional quality and design.</p>
            <Link 
              href="/products" 
              className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-black to-transparent"></div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-blue-600 hover:underline">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from(new Set(products.map(p => p.category))).map((category) => (
            <Link 
              href={`/products?category=${category}`} 
              key={category} 
              className="relative h-40 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 md:p-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Stay updated with our latest products and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button 
              type="submit"
              className="rounded-full bg-foreground text-background px-6 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
