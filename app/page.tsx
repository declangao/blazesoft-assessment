import { Metadata } from 'next';

import BookGrid from '@/components/book-grid';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-8">
      <div className="container">
        <BookGrid />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Blazesoft Bookstore by Declan Gao',
  description: 'Blazesoft frontend developer assessment by Declan Gao',
};
