'use client';

import React from 'react';

import Book from './book';
import { useAppSelector } from '@/store';

const BookGrid = () => {
  const books = useAppSelector((state) => state.books);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
