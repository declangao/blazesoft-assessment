'use client';

import React, { useState } from 'react';

import AddEditBook from './add-edit-book';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
  };

  const onOpenChange = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <div className="container w-full flex justify-between items-center px-4 md:px-16 py-2 border-b shadow-sm">
      <span>Blazesoft Bookstore</span>
      <Button onClick={toggleSheet} variant="ghost" size="sm">
        Add a Book
      </Button>
      <AddEditBook open={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default Navbar;
