import React from 'react'
import Bannercard from '../home/Bannercard';
const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-thistle flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md:w-1/2 space-y-7 h-full'>
            <h2 className='text-6xl font-bold leading-snug text-black'>Buy and sell your books <span className='text-midnight-blue'>For best prices</span></h2>
            <p className='md:w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel numquam dicta, voluptatibus error exercitationem voluptatum! Possimus doloremque officiis distinctio laudantium minus dolorum expedita placeat dolorem deleniti. Tempore adipisci error culpa?</p>
            <div>
                <input type="search" name="search" id="search" placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                <button className='bg-midnight-blue px-6 py-2 text-white font-medium hover:text-black hover:bg-white transition-all ease-in duration-200'>Search</button>
            </div>

        </div>
        <div><Bannercard></Bannercard></div>
      </div>
    </div>
  )
}

export default Banner;
