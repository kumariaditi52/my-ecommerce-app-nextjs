'use client';

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Layout from "../components/Layout";
import QuantitySelector from "../components/QuantitySelector";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, you would redirect to checkout page or process payment
    setTimeout(() => {
      alert('Checkout functionality would be implemented here!');
      setIsCheckingOut(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="bg-gray-100 dark:bg-gray-800 p-12 rounded-lg text-center">
          <p className="text-xl mb-6">Your cart is currently empty</p>
          <Link 
            href="/products" 
            className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead className="border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="text-left py-4 px-2">Product</th>
                  <th className="text-center py-4 px-2">Price</th>
                  <th className="text-center py-4 px-2">Quantity</th>
                  <th className="text-center py-4 px-2">Total</th>
                  <th className="text-right py-4 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.product.id} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 px-2">
                      <div className="flex items-center">
                        <div className="relative h-20 w-20 mr-4 bg-gray-100 dark:bg-gray-800 rounded">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover rounded"
                            sizes="80px"
                          />
                        </div>
                        <div>
                          <Link href={`/products/${item.product.id}`} className="font-medium hover:underline">
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-gray-500">{item.product.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">${item.product.price.toFixed(2)}</td>
                    <td className="text-center py-4 px-2">
                      <div className="flex justify-center">
                        <QuantitySelector
                          initialQuantity={item.quantity}
                          onChange={(quantity) => updateQuantity(item.product.id, quantity)}
                        />
                      </div>
                    </td>
                    <td className="text-center py-4 px-2 font-medium">${(item.product.price * item.quantity).toFixed(2)}</td>
                    <td className="text-right py-4 px-2">
                      <button 
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <button 
                className="text-red-500 hover:text-red-700 font-medium border border-red-500 hover:border-red-700 rounded-full px-6 py-3 transition-colors"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <Link 
                href="/products" 
                className="rounded-full border border-gray-300 dark:border-gray-600 px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
              >
                Continue Shopping
              </Link>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg w-full md:w-96">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-300 dark:border-gray-700 my-4 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <button 
                className="w-full rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors flex items-center justify-center"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Proceed to Checkout'
                )}
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Secure checkout powered by Stripe. Your payment information is encrypted.
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}