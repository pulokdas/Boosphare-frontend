import React from 'react'
import Banner from '../../Components/Banner'
import { Link, useLoaderData } from 'react-router-dom';
import Book from '../../Components/Book';

const Home = () => {
  const allBooks = useLoaderData();
  return (
   <div className='bg-[#F5F5F5]'>
    <Banner/>
    <h1 className=' text-3xl font-bold text-center my-5'>Books</h1>
   <div>
   <div className='grid grid-cols-3 w-11/12 mx-auto gap-x-10 gap-y-5'>
    {
  allBooks.slice(3, 6).map(book => <Book key={book.id} book={book} />)
}

    </div>
   <div className='flex justify-center py-10'>
   <Link to='/allbooks#topOfPage'>
    
    <button className='btn btn-outline  rounded bg-gray-300   text-gray-700  border-gray-700   hover:bg-gray-700 hover:text-gray-100'>See More</button>
    </Link>
    </div> 
   </div>
    
   </div>

  )
}

export default Home