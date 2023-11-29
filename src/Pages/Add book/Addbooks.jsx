import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Authprovider';

const Addbooks = () => {
  const {user} = useContext( AuthContext );
  const email = user?.email;
  // console.log(user.email);

const handleAddbook = async (e) =>{
  e.preventDefault();
  const form = e.target ;
  const title = form.title.value;
  const author = form.author.value;
  const genre = form.genre.value;
  const publication = form.publication.value;
  const description = form.description.value;
  const rating = form.rating.value;
  const image = form.image.value;
  const book ={
    email,
    title,
    author,
    genre,
    publication,
    description,
    rating,
    image
  }
  try {
    const response = await fetch('http://localhost:5000/allbooks' , {
      method:'POST',
      headers:{
        'content-Type' : 'application/json',

      },
      body: JSON.stringify(book),
    });
    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Product Added Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    } else {
      Swal.fire({
        icon: "error",

        title: "oopss! ",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
  e.target.reset();
// console.log(product)
}


  return (
    <div className=''>
       <div className=" w-full pb-16  flex flex-col items-center justify-center  overflow-hidden">
        <div className="md:w-8/12 p-10 bg-gray-700 bg-opacity-50 border-t-4 border-[#E6E6E6] rounded-md shadow-md border-top ">
          <h1 className="text-3xl font-bold  text-white text-center pb-4">Add A Book</h1>
          <form onSubmit={handleAddbook} className="space-y-3">
            <div className='flex flex-col md:flex-row md:gap-10'>
              <div className='md:w-1/2'>
                <label className="label">
                  <span className="text-[#E6E6E6] label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='title'
                  required
                  placeholder="Name"
                  className="w-full text-[#E6E6E6] bg-gray-700 bg-opacity-60 input input-bordered"
                />
              </div>
              <div className='md:w-1/2'>
                <label className="label">
                  <span className="text-[#E6E6E6] label-text">Author</span>
                </label>
                <input
                  type="text"
                  name='author'
                  placeholder="Author"
                  className="w-full text-[#E6E6E6] bg-gray-700 bg-opacity-60 input input-bordered"
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-10'>
              <div className='md:w-1/2'>
                <label className="label">
                  <span className="text-[#E6E6E6] label-text">Genre</span>
                </label>
                <input
                  type="text"
                  name='genre'
                  placeholder="Genre"
                  className="w-full text-[#E6E6E6] bg-gray-700 bg-opacity-60 input input-bordered"
                />
              </div>
              <div className='md:w-1/2'>
                <label className="label">
                  <span className="text-[#E6E6E6] label-text">Publication</span>
                </label>
                <input
                  type="text"
                  name='publication'
                  placeholder="Publication"
                  className="w-full text-[#E6E6E6] bg-gray-700 bg-opacity-60 input input-bordered"
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-10'>
              <div className='md:w-1/2'>
                <label className="label">
                  <span className="text-[#E6E6E6] label-text">rating</span>
                </label>
                <input
                  type="text"
                  name='rating'
                  placeholder="rating"
                  className="w-full text-[#E6E6E6] bg-gray-700 bg-opacity-60 input input-bordered"
                />
              </div>
              <div className='md:w-1/2'>
                <label className="label">
                  <span className="text-[#E6E6E6] label-text">Image</span>
                </label>
                <input
                  type="text"
                  name='image'
                  placeholder="Image URL"
                  className="w-full text-[#E6E6E6] bg-gray-700 bg-opacity-60 input input-bordered"
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="text-[#E6E6E6] label-text">description </span>
              </label>
              <input
                type="text"
                name='description'
                placeholder="Description"
                className="w-full text-[#E6E6E6] bg-gray-700 bg-opacity-60 input input-bordered"
              />
            </div>
            <div className='pt-5'>

              <input type="submit" className='btn btn-outline  rounded bg-gray-300   text-gray-700  border-gray-700 w-full  hover:bg-gray-700 hover:text-gray-100 uppercase' value="Add Book" />
            </div>



          </form>
        </div>
      </div></div>
  )
}

export default Addbooks