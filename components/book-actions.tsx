import React, { useState } from 'react';
import { FilePenLine, Trash } from 'lucide-react';

import { useAppDispatch } from '@/store';
import { deleteBook } from '@/store/book';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Book } from '@/data';
import AddEditBook from './add-edit-book';

type Props = {
  book: Book;
};

const BookActions = ({ book }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen((prev) => !prev);
  };

  const onOpenChange = (value: boolean) => {
    setIsOpen(value);
  };

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="hidden group-hover:flex gap-2 absolute bottom-2 right-2 md:bottom-4 md:right-4">
      <FilePenLine
        role="button"
        onClick={toggleSheet}
        className="cursor-pointer w-6 h-6 hover:text-red-500"
      />
      <AddEditBook initData={book} open={isOpen} onOpenChange={onOpenChange} />

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Trash
            role="button"
            className="cursor-pointer w-6 h-6 hover:text-red-500"
          />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this book?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BookActions;
