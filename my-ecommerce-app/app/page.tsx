import React from 'react';
import ProductCard from '@/src/components/ProductCard';
import Cart from '@/src/components/Cart';
import { Product } from '@/src/context/CartContext';

// Product data with descriptive names and local images
const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone Pro',
    price: 499.99,
    image: '/assets/mockup.jpg', // Local image from public folder
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    price: 129.99,
    image: '/assets/dzeninalukac.jpg', // Local image from public folder
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 249.99,
    image: '/assets/shottrotter.jpg', // Local image from public folder
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: '/assets/soulful.jpg', // Local image from public folder
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Featured Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of high-quality products at competitive prices.
            Free shipping on all orders over $50.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
