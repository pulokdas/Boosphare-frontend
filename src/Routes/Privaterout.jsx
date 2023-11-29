import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';

const Privaterout = ({children}) => {
    const {user , loading}= useContext(AuthContext);
if(loading){
    return <div className='h-screen flex justify-center items-center'><div  className="loading loading-spinner loading-xs "></div></div>
}
if(user){
    return children;
}
  return <Navigate to="/login" > </Navigate>
}

export default Privaterout