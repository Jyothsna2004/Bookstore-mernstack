import React,{useEffect, useState} from 'react'
import Bookcards from '../components/Bookcards';
const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8280/all-books").then(res => res.json()).then(data => {setBooks(data.slice(4,10));})
  }, []);
  
    return (
      <div>
        <Bookcards books={books} headline="Other Books" /> 
      </div>
    );
}

export default OtherBooks
