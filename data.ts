export type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  price: number;
  category: string;
  description?: string;
};

export const NYT_BESTSELLERS: Book[] = [
  {
    id: 1,
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg',
    price: 16.7,
    category: 'Science Fiction & Fantasy',
    description:
      'Violet Sorrengail is urged by the commanding general, who also is her mother, to become a candidate for the elite dragon riders.',
  },
  {
    id: 2,
    title: 'Iron Flame',
    author: 'Rebecca Yarros',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg',
    price: 18.66,
    category: 'Science Fiction & Fantasy',
    description:
      'The second book in the Empyrean series. Violet Sorrengail’s next round of training might require her to betray the man she loves.',
  },
  {
    id: 3,
    title: 'The Fury',
    author: 'Alex Michaelides',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781250758989.jpg',
    price: 18.61,
    category: 'Mystery, Thriller & Suspense',
    description:
      'Violence erupts when a former movie star brings a group of her friends to her private Greek island for Easter.',
  },
  {
    id: 4,
    title: 'First Lie Wins',
    author: 'Ashley Elston',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9780593492918.jpg',
    price: 17.89,
    category: 'Literature & Fiction',
    description:
      'A woman who works for a mysterious boss takes on a new identity to dig up information on someone.',
  },
  {
    id: 5,
    title: 'The Heaven & Earth Grocery Store',
    author: 'James McBride',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9780593422946.jpg',
    price: 16.99,
    category: 'Literature & Fiction',
    description:
      'Secrets held by the residents of a dilapidated neighborhood come to life when a skeleton is found at the bottom of a well.',
  },
  {
    id: 6,
    title: 'Icebreaker',
    author: 'Hannah Grace',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781668026038.jpg',
    price: 10.44,
    category: 'Romance',
    description:
      'Anastasia might need the help of the captain of a college hockey team to get on the Olympic figure skating team.',
  },
  {
    id: 7,
    title: 'The Housemaid',
    author: 'Freida McFadden',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781538742570.jpg',
    price: 8.11,
    category: 'Literature & Fiction',
    description:
      'Troubles surface when a woman looking to make a fresh start takes a job in the home of the Winchesters.',
  },
  {
    id: 8,
    title: 'House of Earth and Blood',
    author: 'Sarah J. Maas',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781635574043.jpg',
    price: 25.19,
    category: 'Literature & Fiction',
    description:
      'Passion arises between Bryce Quinlan and Hunt Athalar as they seek to avenge the deaths of Bryce’s friends.',
  },
  {
    id: 9,
    title: 'A Court of Silver Flames',
    author: 'Sarah J. Maas',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781681196282.jpg',
    price: 15.9,
    category: 'Literature & Fiction',
    description:
      'The fifth book in the Court of Thorns and Roses series. Nesta Archeron is forced into close quarters with a warrior named Cassian.',
  },
  {
    id: 10,
    title: 'House of Sky and Breath',
    author: 'Sarah J. Maas',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781635574074.jpg',
    price: 15.65,
    category: 'Literature & Fiction',
    description:
      'The second book in the Crescent City series. Bryce Quinlan and Hunt Athalar must choose to fight or stay silent.',
  },
  {
    id: 11,
    title: 'It Ends with Us',
    author: 'Colleen Hoover',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg',
    price: 14.5,
    category: 'Literature & Fiction',
    description:
      'A battered wife raised in a violent home attempts to halt the cycle of abuse.',
  },
  {
    id: 12,
    title: 'Holmes, Marple & Poe',
    author: 'James Patterson',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9780316405195.jpg',
    price: 13.69,
    category: 'Mystery, Thriller & Suspense',
    description:
      'Three private investigators working in New York City draw the attention of an N.Y.P.D. detective.',
  },
  {
    id: 13,
    title: 'A Little Life',
    author: 'Hanya Yanagihara',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9780804172707.jpg',
    price: 13.09,
    category: 'Literature & Fiction',
    description:
      'Four college friends, one with a traumatic past, move to New York seeking fame and fortune.',
  },
  {
    id: 14,
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg',
    price: 15.37,
    category: 'Humor & Entertainment',
    description:
      'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.',
  },
  {
    id: 15,
    title: 'Midnight Ruin',
    author: 'Katee Robert',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781728262796.jpg',
    price: 12.74,
    category: 'Literature & Fiction',
    description:
      'The sixth book in the Dark Olympus series. Orpheus wants to get Eurydice back but things are complicated by Charon.',
  },
];

export const CATEGORIES = Array.from(
  new Set(NYT_BESTSELLERS.map((book) => book.category))
);
