import React from 'react'

const Banner = () => {
  return (
    <div className='h-screen'>
  <div className="hero h-full" style={{backgroundImage: 'url(https://i.ibb.co/Z2JK9LH/banner.jpg)'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-4xl font-bold text-white">Welcome <br /> To <br /> <span className=' text-5xl'>BOOKSPHERE</span></h1>
        <p className="mb-5 text-white">Discover a world of captivating stories and adventures. Immerse yourself in the enchanting realms created by talented authors.</p>
        <button  className="btn btn-outline  rounded bg-gray-300   text-gray-700  border-gray-700   hover:bg-gray-700 hover:text-gray-100">Brows Books</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Banner