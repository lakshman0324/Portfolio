import React, { useState } from 'react';
import { Product } from '../types';
import ProductList from '../components/products/ProductList';
import ProductForm from '../components/products/ProductForm';

export default function Products() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();

  const handleAdd = () => {
    setSelectedProduct(undefined);
    setIsFormOpen(true);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const handleDelete = (product: Product) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      // Add delete logic here
      console.log('Deleting product:', product);
    }
  };

  const handleSubmit = (productData: Omit<Product, 'id'>) => {
    if (selectedProduct) {
      // Add update logic here
      console.log('Updating product:', { ...productData, id: selectedProduct.id });
    } else {
      // Add create logic here
      console.log('Creating product:', productData);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Management</h1>
      </div>

      <ProductList
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {isFormOpen && (
        <ProductForm
          product={selectedProduct}
          onSubmit={handleSubmit}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}