import React from 'react';
import ProductCard from '@/src/components/ProductCard';
import Cart from '@/src/components/Cart';
import { Product } from '@/src/context/CartContext';

// Updated product data with local images
const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    image: '/assets/allec.jpg', // Local image from public folder
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    image: '/assets/allec.jpg', // Local image from public folder
  },
  {
    id: 3,
    name: 'Product 3',
    price: 39.99,
    image: '/assets/allec.jpg', // Local image from public folder
  },
  {
    id: 4,
    name: 'Product 4',
    price: 49.99,
    image: '/assets/allec.jpg', // Local image from public folder
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Products</h1>
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