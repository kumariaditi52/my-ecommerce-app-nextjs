'use client';

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product detail
    e.stopPropagation();
    
    setIsAdding(true);
    addToCart(product, 1);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all hover:shadow-lg group">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">${product.price.toFixed(2)}</p>
          <div className="flex items-center mb-3">
            <div className="text-yellow-500 flex">
              {Array(5).fill(0).map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">{product.category}</p>
          
          <button
            onClick={handleAddToCart}
            className={`w-full rounded-full ${
              isAdding 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc]'
            } text-background px-4 py-2 text-sm font-medium transition-colors`}
            disabled={isAdding}
          >
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </Link>
    </div>
  );
}