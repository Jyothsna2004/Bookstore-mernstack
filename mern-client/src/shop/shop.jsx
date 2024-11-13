import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
const Shop = () => {
    const[books,setbooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8280/all-books").then(res=>res.json()).then(data=>setbooks(data));
    },[])
    return (
        <div className='mt-28 px-4 lg:px24 '>
            <h2 className='text-5xl font-bold text-center'>All Books Available Here!</h2>
            <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
                {
                books.map(book => <Card key={book._id}>
                    <img src={book.imageUrl} className='h-85'/>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">{book.bookTitle}</h3>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{book.bookDescription}</p>
                    <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
                    </Card>)
                }
            </div>
        </div> // Correctly using parentheses for returning JSX
    );
}

export default Shop;