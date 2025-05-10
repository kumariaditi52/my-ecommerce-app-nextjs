'use client';

import React, { useState } from 'react';

interface QuantitySelectorProps {
  initialQuantity?: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ 
  initialQuantity = 1, 
  onChange, 
  min = 1, 
  max = 99 
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
      onChange(value);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md w-fit">
      <button 
        type="button"
        className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={handleDecrease}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleChange}
        className="w-12 h-10 text-center border-x border-gray-300 dark:border-gray-600 bg-transparent"
        aria-label="Quantity"
      />
      <button 
        type="button"
        className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={handleIncrease}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}