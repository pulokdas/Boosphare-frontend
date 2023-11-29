import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../../Components/Book';

const Allbooks = () => {
  const allBooks = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books based on search term
  const filteredBooks = allBooks.filter((book) =>
  book && book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  
  useEffect(() => {

    const hashInUrl = window.location.hash === '#topOfPage';

    
    if (hashInUrl) {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div id='topOfPage'>
      <div className='flex flex-col justify-center mb-20'>
        <h1 className='text-4xl font-bold text-center mt-10'>ALL BOOKS</h1>
        <div className='flex gap-4 items-center justify-center'>
          <input
            placeholder="Search your desired book's title"
            className='border-2 border-gray-400 py-1 w-1/3'
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className='btn btn-sm rounded bg-gray-700 text-gray-100 border-gray-700 hover:bg-gray-100 hover:text-gray-700'
            type='submit'
          >
            Search
          </button>
        </div>
      </div>
      <div className='grid grid-cols-3 w-11/12 mx-auto gap-x-10 gap-y-5'>
        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Allbooks;
