import React, { useContext, useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { CiSaveDown2 } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { AuthContext, Authprovider } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
const Bookdeails = () => {
   const book = useLoaderData();
   const{user} = useContext(AuthContext);
   const {_id ,title,email, author, genre, publication, rating, description, image} = book;
const isOwner = user && user?.email === email;
const navigate = useNavigate();
const handleDelete =()=>{
console.log(_id);
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
     
      fetch(`https://booksphare-backend.vercel.app/book/${_id}`,{
        method: 'DELETE',
      })
      .then(res=> res.json())
      .then(data=>{
        if(data.deletedCount > 0){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
        }
        navigate("/");
      })
    }
  });
  
}

  return (
    <div>
        
        <div className="hero  w-11/12 mx-auto bg-base-200">
  <div className="flex gap-20 py-10 flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='py-10 '>
    <div className='grid gap-32 grid-cols-3'>
    <div className=' col-span-2 '>
    <h1 className="text-5xl font-bold">{title}</h1>
    <div className=' space-y-2 py-6'>
    <p className="-6 font-medium">author: {author}</p>
      <p className=" font-medium">genre: {genre}</p>
      <p className=" font-medium">publication: {publication}</p>
      <p className=" font-medium">rating: {rating}</p>
    </div>
      
      
    </div>
    {isOwner ? (
        <div>
            <Link to={`/update/${_id}`}>
            
          <h1 className='text-green-500 btn btn-outline'>
            <GrUpdate /> Update
          </h1>
            
            </Link>
          <h1 onClick={()=>{handleDelete()}} className='text-red-500 ml-3 btn btn-outline'>
            <RiDeleteBinLine /> DELETE
          </h1>
        </div>
      ): <div>
        <div className="tooltip" data-tip="You Can Only UPDATE or DELETE the books you Added">
        <h1 className='text-green-500 btn btn-disabled btn-outline'>
      <GrUpdate /> Update
    </h1>
      </div>
    <div className="tooltip" data-tip="You Can Only UPDATE or DELETE the books you Added">
    <h1  className='text-red-500 ml-3 btn btn-disabled btn-outline'>
            <RiDeleteBinLine /> DELETE
          </h1></div></div>}
    </div>
    <div >
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