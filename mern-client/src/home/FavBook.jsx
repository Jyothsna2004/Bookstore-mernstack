import React from 'react'
import { Link } from 'react-router-dom';
import FavBookimg from '../assets/favbookcollage2.jpeg'
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap:12'>
      <div className='md:w-1/2'>
         <img src={FavBookimg} alt="" className='rounded md:w-10/12' />
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-red-700'>Book Here!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum molestiae repellat non laborum neque reiciendis alias eius, cupiditate quidem, aliquam iure ullam molestias praesentium maiores pariatur incidunt expedita ratione.</p>      
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-3xl font-bold '>1000+</h3>
                <p>Books Available here</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold '>700+</h3>
                <p>Registered Users</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold '>1500+</h3>
                <p>PDF's Downloaded</p>
            </div>
        </div>
        <Link to="/shop" className='mt-12 block'><button className='bg-green-300 text-black font-semibold px-5 py-2 rounded hover:bg-blue-400 transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>

  )
}

export default FavBook