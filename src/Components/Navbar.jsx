import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/Authprovider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };

  

  return (
    <div data-aos="none" className="navbar  bg-gray-700 bg-opacity-50 shadow text-gray-800 z-50">
    <div className="navbar-start">
      <div className="dropdown relative  ">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className=" flex absolute top-7 left-0 dropdown-content mt-3 z-[1] py-2 shadow bg-[#1f2229]     ">
       <li>example</li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl text-white hover:bg-gray-700 hover:bg-opacity-0">BOOKSPHERE</a>
    </div>
    <div className="navbar-center hidden lg:flex  ">
      <ul className=" flex  gap-5 font-bold">
      
      <li>
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white" : ""
  }
>
  HOME
</NavLink>
      </li>
      <li>
      <NavLink
  to="/addbooks"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white" : ""
  }
>
  ADD BOOK
</NavLink>
      </li>
      <li>
      <NavLink
  to="/allbooks"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white" : ""
  }
>
  ALL BOOKS
</NavLink>
      </li>
      </ul>
    </div>
    <div className='navbar-end gap-5'>
       
    
    {user ? (
            <div className="flex gap-2">
              
              <button
                onClick={handleSignOut}
                className="btn btn-outline  rounded bg-gray-300   text-gray-700  border-gray-700   hover:bg-gray-700 hover:text-gray-100"
              >
                SIGN Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to='/login'>
    <button  className="btn   rounded bg-gray-700   text-gray-100  border-gray-700   hover:bg-gray-100 hover:text-gray-700">LOG IN</button>
</Link>
<Link to='/register'>
      <button  className="btn btn-outline  rounded bg-gray-300   text-gray-700  border-gray-700   hover:bg-gray-700 hover:text-gray-100">REGISTER</button>
</Link>
            </div>
          )}
          </div>
  </div>
  )
}

export default Navbar

