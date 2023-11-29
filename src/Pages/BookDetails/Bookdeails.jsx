import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom'
import { CiSaveDown2 } from "react-icons/ci";
const Bookdeails = () => {
   const book = useLoaderData();
//    console.log(book);
const {_id ,title, author, genre, publication, rating, description, image} = book;

  return (
    <div>
        
        <div className="hero h-screen w-11/12 mx-auto bg-base-200">
  <div className="flex gap-20 py-10 flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='py-10'>
      <h1 className="text-5xl font-bold">{title}</h1>
    <div className=' space-y-2 py-6'>
    <p className="-6 font-medium">author: {author}</p>
      <p className=" font-medium">genre: {genre}</p>
      <p className=" font-medium">publication: {publication}</p>
      <p className=" font-medium">rating: {rating}</p>
    </div>
      <div>
        <h1 className=' text-2xl font-medium'>StoryLine:</h1>
        <p>{description}</p>
      </div>
      <button  className="btn mt-20 w-full btn-sm btn-outline  rounded bg-gray-300   text-gray-700  border-gray-700   hover:bg-gray-700 hover:text-gray-100"><FaRegHeart /> ADD to Favourite</button>
      <button  className="btn mt-5 w-full btn-sm  rounded bg-gray-700   text-gray-100  border-gray-700   hover:bg-gray-100 hover:text-gray-700"><CiSaveDown2 /> Download </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Bookdeails