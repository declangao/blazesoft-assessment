import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Book, NYT_BESTSELLERS } from '@/data';

const initialBookState: {
  books: Book[];
} = {
  books: NYT_BESTSELLERS,
};

const bookSlice = createSlice({
  name: 'book',
  initialState: initialBookState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.unshift(action.payload);
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const id = action.payload.id;
      const index = state.books.findIndex((book) => book.id === id);

      if (index !== -1) {
        state.books[index] = {
          ...state.books[index],
          title: action.payload.title,
          author: action.payload.author,
          image: action.payload.image,
          price: action.payload.price,
          category: action.payload.category,
          description: action.payload.description,
        };
      }
    },
  },
});

export const bookReducer = bookSlice.reducer;
export const { deleteBook, addBook, updateBook } = bookSlice.actions;
