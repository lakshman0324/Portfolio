import React, { useState } from 'react';
import { Product } from '../../types';
import { Edit, Trash2, Plus, Search, ArrowUpDown } from 'lucide-react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

// Mock data - replace with actual API calls
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    stockQuantity: 50,
    categoryId: '1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 299.99,
    stockQuantity: 30,
    categoryId: '2',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200',
  },
];

const columnHelper = createColumnHelper<Product>();

export default function ProductList({ onEdit, onDelete, onAdd }: {
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
  onAdd: () => void;
}) {
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = [
    columnHelper.accessor('image', {
      header: 'Image',
      cell: info => (
        <img
          src={info.getValue()}
          alt={info.row.original.name}
          className="h-12 w-12 rounded-lg object-cover"
        />
      ),
    }),
    columnHelper.accessor('name', {
      header: ({ column }) => (
        <div className="flex items-center gap-2">
          Name
          <ArrowUpDown
            className="h-4 w-4 cursor-pointer"
            onClick={() => column.toggleSorting()}
          />
        </div>
      ),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      cell: info => (
        <div className="max-w-xs truncate">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor('price', {
      header: ({ column }) => (
        <div className="flex items-center gap-2">
          Price
          <ArrowUpDown
            className="h-4 w-4 cursor-pointer"
            onClick={() => column.toggleSorting()}
          />
        </div>
      ),
      cell: info => `$${info.getValue().toFixed(2)}`,
    }),
    columnHelper.accessor('stockQuantity', {
      header: ({ column }) => (
        <div className="flex items-center gap-2">
          Stock
          <ArrowUpDown
            className="h-4 w-4 cursor-pointer"
            onClick={() => column.toggleSorting()}
          />
        </div>
      ),
      cell: info => (
        <span className={`px-2 py-1 rounded-full text-sm ${
          info.getValue() <= 10 ? 'bg-red-100 text-red-800' :
          info.getValue() <= 30 ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(row.original)}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(row.original)}
            className="p-1 text-red-600 hover:bg-red-50 rounded"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: mockProducts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Products</h2>
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}