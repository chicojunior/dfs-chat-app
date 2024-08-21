import { Assistant } from '../model/assistant';
import { Topic } from '../model/topic';

export const assistants: Assistant[] = [
  { id: 1, name: 'Bob', isAvailable: true },
  { id: 2, name: 'Alice', isAvailable: false },
  { id: 3, name: 'John', isAvailable: true },
  { id: 4, name: 'Eva', isAvailable: true },
];

export const topics: Topic[] = [
  {
    id: 1,
    name: 'Football',
    subtopics: [
      {
        id: 1,
        name: 'Premier League',
        items: [
          {
            id: 1,
            name: 'Liverpool',
            description: 'Football club based in Liverpool, England.',
          },
          {
            id: 2,
            name: 'Man. UTD',
            description: 'Football club based in Manchester, England.',
          },
          {
            id: 3,
            name: 'Man. City',
            description: 'Football club based in Manchester, England.',
          },
          {
            id: 4,
            name: 'Chelsea',
            description: 'Football club based in London, England.',
          },
          {
            id: 5,
            name: 'Arsenal',
            description: 'Football club based in London, England.',
          },
        ],
      },
      {
        id: 2,
        name: 'Serie A',
        items: [
          {
            id: 6,
            name: 'Milan',
            description: 'Football club based in Milan, Italy.',
          },
          {
            id: 7,
            name: 'Inter',
            description: 'Football club based in Milan, Italy.',
          },
          {
            id: 8,
            name: 'Juventus',
            description: 'Football club based in Turin, Italy.',
          },
          {
            id: 9,
            name: 'Roma',
            description: 'Football club based in Rome, Italy.',
          },
          {
            id: 10,
            name: 'Napoli',
            description: 'Football club based in Naples, Italy.',
          },
        ],
      },
      {
        id: 3,
        name: 'La Liga',
        items: [
          {
            id: 11,
            name: 'Barcelona',
            description: 'Football club based in Barcelona, Spain.',
          },
          {
            id: 12,
            name: 'Real Madrid',
            description: 'Football club based in Madrid, Spain.',
          },
          {
            id: 13,
            name: 'Atletico Madrid',
            description: 'Football club based in Madrid, Spain.',
          },
          {
            id: 14,
            name: 'Sevilla',
            description: 'Football club based in Seville, Spain.',
          },
          {
            id: 15,
            name: 'Valencia',
            description: 'Football club based in Valencia, Spain.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Books',
    subtopics: [
      {
        id: 4,
        name: 'Investment',
        items: [
          {
            id: 16,
            name: 'The Intelligent Investor',
            description: 'Book by Benjamin Graham on value investing.',
          },
          {
            id: 17,
            name: 'Rich Dad, Poor Dad',
            description: 'Book by Robert Kiyosaki on personal finance.',
          },
          {
            id: 18,
            name: 'Principles',
            description: 'Book by Ray Dalio on life and work principles.',
          },
          {
            id: 19,
            name: 'The Little Book of Common Sense Investing',
            description: 'Book by John C. Bogle on index funds.',
          },
          {
            id: 20,
            name: 'The Millionaire Next Door',
            description: 'Book by Thomas J. Stanley on wealth-building habits.',
          },
        ],
      },
      {
        id: 5,
        name: 'Children',
        items: [
          {
            id: 21,
            name: 'Momo',
            description: "Children's book by Michael Ende.",
          },
          {
            id: 22,
            name: 'BFG',
            description: "Children's book by Roald Dahl.",
          },
          {
            id: 23,
            name: 'Matilda',
            description: "Children's book by Roald Dahl.",
          },
          {
            id: 24,
            name: 'Where the Wild Things Are',
            description: "Children's book by Maurice Sendak.",
          },
          {
            id: 25,
            name: 'The Gruffalo',
            description: "Children's book by Julia Donaldson.",
          },
        ],
      },
      {
        id: 6,
        name: 'Science Fiction',
        items: [
          {
            id: 26,
            name: 'Dune',
            description: 'Science fiction novel by Frank Herbert.',
          },
          {
            id: 27,
            name: 'Neuromancer',
            description: 'Cyberpunk novel by William Gibson.',
          },
          {
            id: 28,
            name: 'The Left Hand of Darkness',
            description: 'Science fiction novel by Ursula K. Le Guin.',
          },
          {
            id: 29,
            name: 'Snow Crash',
            description: 'Science fiction novel by Neal Stephenson.',
          },
          {
            id: 30,
            name: 'The Martian',
            description: 'Science fiction novel by Andy Weir.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Movies',
    subtopics: [
      {
        id: 7,
        name: 'Action',
        items: [
          {
            id: 31,
            name: 'Die Hard',
            description: 'Action film starring Bruce Willis.',
          },
          {
            id: 32,
            name: 'Mad Max: Fury Road',
            description: 'Action film directed by George Miller.',
          },
          {
            id: 33,
            name: 'John Wick',
            description: 'Action film starring Keanu Reeves.',
          },
          {
            id: 34,
            name: 'The Dark Knight',
            description: 'Superhero film directed by Christopher Nolan.',
          },
          {
            id: 35,
            name: 'Gladiator',
            description: 'Historical drama directed by Ridley Scott.',
          },
        ],
      },
      {
        id: 8,
        name: 'Drama',
        items: [
          {
            id: 36,
            name: 'The Godfather',
            description: 'Crime film directed by Francis Ford Coppola.',
          },
          {
            id: 37,
            name: 'Forrest Gump',
            description: 'Drama film starring Tom Hanks.',
          },
          {
            id: 38,
            name: "Schindler's List",
            description: 'Historical drama directed by Steven Spielberg.',
          },
          {
            id: 39,
            name: 'Fight Club',
            description: 'Drama film directed by David Fincher.',
          },
          {
            id: 40,
            name: 'The Shawshank Redemption',
            description: 'Drama film based on a Stephen King novella.',
          },
        ],
      },
      {
        id: 9,
        name: 'Comedy',
        items: [
          {
            id: 41,
            name: 'Monty Python and the Holy Grail',
            description: 'British comedy film by Monty Python.',
          },
          {
            id: 42,
            name: 'The Big Lebowski',
            description: 'Comedy film directed by the Coen brothers.',
          },
          {
            id: 43,
            name: 'Groundhog Day',
            description: 'Comedy film starring Bill Murray.',
          },
          {
            id: 44,
            name: 'Anchorman',
            description: 'Comedy film starring Will Ferrell.',
          },
          {
            id: 45,
            name: 'Superbad',
            description: 'Teen comedy film directed by Greg Mottola.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Music',
    subtopics: [
      {
        id: 10,
        name: 'Rock',
        items: [
          {
            id: 46,
            name: 'Led Zeppelin',
            description: 'English rock band formed in 1968.',
          },
          {
            id: 47,
            name: 'The Beatles',
            description: 'Iconic rock band from Liverpool.',
          },
          {
            id: 48,
            name: 'Pink Floyd',
            description: 'Progressive rock band from London.',
          },
          {
            id: 49,
            name: 'The Rolling Stones',
            description: 'Rock band formed in London in 1962.',
          },
          {
            id: 50,
            name: 'Queen',
            description: 'British rock band formed in 1970.',
          },
        ],
      },
      {
        id: 11,
        name: 'Jazz',
        items: [
          {
            id: 51,
            name: 'Miles Davis',
            description: 'American jazz trumpeter and composer.',
          },
          {
            id: 52,
            name: 'John Coltrane',
            description: 'American jazz saxophonist and composer.',
          },
          {
            id: 53,
            name: 'Billie Holiday',
            description: 'American jazz and swing music singer.',
          },
          {
            id: 54,
            name: 'Louis Armstrong',
            description: 'American trumpeter, composer, and singer.',
          },
          {
            id: 55,
            name: 'Duke Ellington',
            description: 'American composer and jazz orchestra leader.',
          },
        ],
      },
      {
        id: 12,
        name: 'Pop',
        items: [
          {
            id: 56,
            name: 'Michael Jackson',
            description: 'American singer, songwriter, and dancer.',
          },
          {
            id: 57,
            name: 'Madonna',
            description:
              "American singer and actress, known as the 'Queen of Pop'.",
          },
          {
            id: 58,
            name: 'Prince',
            description:
              'American singer, songwriter, and multi-instrumentalist.',
          },
          {
            id: 59,
            name: 'Taylor Swift',
            description: 'American singer-songwriter.',
          },
          {
            id: 60,
            name: 'Adele',
            description:
              'English singer-songwriter known for her powerful voice.',
          },
        ],
      },
    ],
  },
];
