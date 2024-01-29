import React from 'react';

import { Book } from '@/data';
import BookActions from './book-actions';

const Book = ({ book }: { book: Book }) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(price);

  return (
    <div className="group flex w-full h-32 relative">
      <img src={book.image} alt={book.title} className="w-20 h-32" />

      <div className="w-full flex flex-col justify-evenly px-4 py-2 group-hover:bg-primary/20 duration-500">
        <h3 className="uppercase text-sm md:text-base text-ellipsis">
          {book.title}
        </h3>
        <h4 className="text-sm md:text-base text-muted-foreground">
          {book.category}
        </h4>
        <p className="text-muted-foreground italic text-gray-400">
          {book.author}
        </p>
        <p className="leading-6">{formatPrice(book.price)}</p>
      </div>

      <BookActions book={book} />
    </div>
  );
};

export default Book;
