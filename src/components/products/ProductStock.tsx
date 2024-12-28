import React from 'react';

interface ProductStockProps {
  productId: string;
  currentStock: number;
  onUpdateStock: (newStock: number) => void;
}

export default function ProductStock({ productId, currentStock, onUpdateStock }: ProductStockProps) {
  const handleStockChange = (amount: number) => {
    const newStock = Math.max(0, currentStock + amount);
    onUpdateStock(newStock);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleStockChange(-1)}
        className="px-2 py-1 border rounded hover:bg-gray-50"
        disabled={currentStock <= 0}
      >
        -
      </button>
      <span className="min-w-[3rem] text-center">{currentStock}</span>
      <button
        onClick={() => handleStockChange(1)}
        className="px-2 py-1 border rounded hover:bg-gray-50"
      >
        +
      </button>
    </div>
  );
}