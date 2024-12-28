import React, { useState } from 'react';
import { User } from '../types';
import UserList from '../components/users/UserList';
import UserForm from '../components/users/UserForm';

export default function Users() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();

  const handleAdd = () => {
    setSelectedUser(undefined);
    setIsFormOpen(true);
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDelete = (user: User) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      // Add delete logic here
      console.log('Deleting user:', user);
    }
  };

  const handleSubmit = (userData: Omit<User, 'id'>) => {
    if (selectedUser) {
      // Add update logic here
      console.log('Updating user:', { ...userData, id: selectedUser.id });
    } else {
      // Add create logic here
      console.log('Creating user:', userData);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
      </div>

      <UserList
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {isFormOpen && (
        <UserForm
          user={selectedUser}
          onSubmit={handleSubmit}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}