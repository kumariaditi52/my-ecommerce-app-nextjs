"use client"

import React from 'react';
import { useCart } from '@/src/context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-2 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-2 rounded"
              >
                +
              </button>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <p className="font-bold">Total: ${getCartTotal().toFixed(2)}</p>
        <button className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;