import 'flowbite/dist/flowbite.css';
import { Table } from "flowbite-react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Managebooks = () => {
  const [allbooks,setAllbooks]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8280/all-books").then(res=>res.json()).then(data=>setAllbooks(data))
  },[]);
  const handleDelete=(id)=>{
    fetch(`http://localhost:8280/book/${id}`,{
      method:'Delete',
    }).then(res=>res.json()).then(data=>{alert("Book is deleted")}),
    setAllbooks(data);
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allbooks.map((book,index) => <Table.Body className='divide-y' key={book._id}>
            
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$10.0</Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/editbooks/${book._id}`}> Edit
              </Link>
              <button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>
    </div>
  )
}

export default Managebooks
