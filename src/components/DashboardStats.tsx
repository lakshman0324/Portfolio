import React from 'react';
import { Users, Package, ShoppingBag, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '1,234',
    icon: Users,
    change: '+12.5%',
    changeType: 'increase',
  },
  {
    title: 'Total Products',
    value: '456',
    icon: Package,
    change: '+8.2%',
    changeType: 'increase',
  },
  {
    title: 'Total Orders',
    value: '789',
    icon: ShoppingBag,
    change: '+23.1%',
    changeType: 'increase',
  },
  {
    title: 'Revenue',
    value: '$12,345',
    icon: DollarSign,
    change: '+15.3%',
    changeType: 'increase',
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}