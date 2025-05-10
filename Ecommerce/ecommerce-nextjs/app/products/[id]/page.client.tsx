'use client';

import { Product } from '@/data/products';
import AddToCartButton from '@/app/components/AddToCartButton';
import QuantitySelector from '@/app/components/QuantitySelector';
import { useState } from 'react';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Quantity:</label>
        <QuantitySelector 
          initialQuantity={1} 
          onChange={setQuantity} 
        />
      </div>
      
      <div className="flex gap-4">
        <AddToCartButton product={product} quantity={quantity} />
        <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] px-6 py-3 font-medium hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}