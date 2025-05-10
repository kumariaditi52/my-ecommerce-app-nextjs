'use client';

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartIndicator() {
  const { getCartItemsCount } = useCart();
  const itemCount = getCartItemsCount();
  
  return (
    <Link href="/cart" className="relative hover:underline">
      Cart
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}