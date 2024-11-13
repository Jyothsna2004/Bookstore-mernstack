import React from 'react'
import { Link } from 'react-router-dom'
import bookaward from "../assets/book-award.jpg"
const PromoBromo = () => {
  return (
    <div style={{ backgroundColor: 'thistle' }} className='mt-16 py-12 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>2023 National Book Awards For Fiction Shortlist</h2>
                <Link to="/shop" className='mt-12 block'><button className='bg-green-300 text-black font-semibold px-5 py-2 rounded hover:bg-blue-400 transition-all duration-300'>Get Promo</button></Link>
            </div>
            <div>
                <img src={bookaward} alt="" className='w-96' />
            </div>
        </div>
    </div>
  )
}

export default PromoBromo
