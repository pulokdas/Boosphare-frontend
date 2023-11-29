import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Book = ({book}) => {
    const {_id ,title, author, genre, publication, rating, description, image} = book;
   console.log(_id);
  return (
    <div className="card card-side bg-gray-700 bg-opacity-70 shadow-xl">
    <div className=' w-40'><figure ><img className='w-40 h-72' src={image} alt="Movie"/></figure></div>
    <div className="card-body">
      <h2 className="card-title text-white">{title}</h2>
      <h3>By {author}</h3>
      <div>
      <p>genre: <span className='text-white'>{genre}</span></p>
      <p>publication: <span className='text-white'>{publication}</span></p>
      <p>rating: <span className='text-white'>{rating}</span></p>
      </div>
      <div className="card-actions flex flex-col-reverse">
      <Link className=' w-full'  to={`/book/${_id}`}>
      <button  className="btn  btn-block btn-sm  rounded bg-gray-700   text-gray-100  border-gray-700   hover:bg-gray-100 hover:text-gray-700"> View Details </button>
      
      </Link>
      
      <button  className="btn w-full btn-sm btn-outline  rounded bg-gray-300   text-gray-700  border-gray-700   hover:bg-gray-700 hover:text-gray-100"><FaRegHeart /> ADD to Favourite</button>
      </div>
    </div>
  </div>
  )
}

export default Book