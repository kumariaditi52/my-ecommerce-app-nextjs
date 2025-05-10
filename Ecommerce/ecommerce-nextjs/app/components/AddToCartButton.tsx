'use client';

import { Product } from '@/data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: Product;
  quantity: number;
}

export default function AddToCartButton({ product, quantity }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    
    // Show feedback for a short time
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <button 
      className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors flex-1"
      onClick={handleAddToCart}
      disabled={isAdding}
    >
      {isAdding ? 'Added to Cart!' : 'Add to Cart'}
    </button>
  );
}