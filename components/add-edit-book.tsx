import React from 'react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Book, CATEGORIES } from '@/data';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useAppDispatch } from '@/store';
import { addBook, updateBook } from '@/store/book';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const bookSchema = z.object({
  title: z
    .string()
    .min(1, 'Title must have at least 1 character')
    .max(50, 'Title cannot be longer than 50 characters'),
  author: z
    .string()
    .min(1, 'Author must have at least 1 character')
    .max(30, 'Author cannot be longer than 30 characters'),
  image: z.string().url('Must be a valid URL'),
  price: z.coerce.number().positive('Price must be greater than 0'),
  category: z
    .string()
    .min(1, 'Category must have at least 1 character')
    .max(50, 'Category cannot be longer than 50 characters'),
  description: z.string().optional(),
});

type TBookSchema = z.infer<typeof bookSchema>;

type Props = {
  initData?: Book;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const AddEditBook = ({ initData, open, onOpenChange }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<TBookSchema>({
    resolver: zodResolver(bookSchema),
    defaultValues: initData,
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: TBookSchema) => {
    if (initData) {
      dispatch(updateBook({ id: initData.id, ...data }));
    } else {
      dispatch(
        addBook({
          id: new Date().getTime(),
          ...data,
        })
      );
    }

    reset();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <h3>{initData ? 'Edit' : 'Add'}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1 py-2">
              <Label htmlFor="title">Title</Label>
              <Input
                {...register('title')}
                id="title"
                className={cn({
                  'focus-visible:ring-red-500': errors.title,
                })}
                placeholder="Book title"
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title?.message}</p>
              )}
            </div>

            <div className="grid gap-1 py-2">
              <Label htmlFor="author">Author</Label>
              <Input
                {...register('author')}
                id="author"
                className={cn({
                  'focus-visible:ring-red-500': errors.author,
                })}
                placeholder="Author name"
              />
              {errors.author && (
                <p className="text-sm text-red-500">{errors.author?.message}</p>
              )}
            </div>

            <div className="grid gap-1 py-2">
              <Label htmlFor="price">Price</Label>
              <Input
                {...register('price')}
                id="price"
                className={cn({
                  'focus-visible:ring-red-500': errors.price,
                })}
                placeholder="Price"
              />
              {errors.price && (
                <p className="text-sm text-red-500">{errors.price?.message}</p>
              )}
            </div>

            <div className="grid gap-1 py-2">
              <Label htmlFor="category">Category</Label>
              <Controller
                control={control}
                defaultValue={initData?.category}
                name="category"
                render={({ field }) => {
                  const { name, onChange, value, disabled } = field;
                  return (
                    // <Select onValueChange={field.onChange} {...field}>
                    <Select
                      onValueChange={onChange}
                      name={name}
                      value={value}
                      disabled={disabled}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  );
                }}
              />
              {errors.category && (
                <p className="text-sm text-red-500">
                  {errors.category?.message}
                </p>
              )}
            </div>

            <div className="grid gap-1 py-2">
              <Label htmlFor="image">Image</Label>
              <Input
                {...register('image')}
                id="image"
                className={cn({
                  'focus-visible:ring-red-500': errors.image,
                })}
                placeholder="Book cover"
              />
              {errors.image && (
                <p className="text-sm text-red-500">{errors.image?.message}</p>
              )}
            </div>

            <div className="grid gap-1 py-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                {...register('description')}
                id="description"
                className={cn({
                  'focus-visible:ring-red-500': errors.description,
                })}
                placeholder="Book description (optional)"
              />
            </div>

            <Button type="submit">Save</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default AddEditBook;
