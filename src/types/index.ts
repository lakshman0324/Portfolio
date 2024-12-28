// Common types used across the application
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryId: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Order {
  id: string;
  userId: string;
  orderDate: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  totalPrice: number;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
}

export interface Payment {
  id: string;
  orderId: string;
  paymentDate: string;
  amount: number;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface Shipping {
  id: string;
  orderId: string;
  shippingAddress: string;
  shippingMethod: string;
  trackingNumber: string;
  shippingDate: string;
  status: 'pending' | 'in_transit' | 'delivered';
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
}