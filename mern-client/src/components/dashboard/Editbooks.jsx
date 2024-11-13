import { useLoaderData, useParams } from 'react-router-dom'
import { Button,  Label, Select, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
const Editbooks = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl}=useLoaderData()
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "Self-Help",
    "Historical Fiction",
    "Young Adult",
    "Children's",
    "Graphic Novel",
    "Horror",
    "Adventure",
    "Science",
    "Philosophy",
    "Poetry",
    "Classic",
    "Humor"
  ];

  const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);

  const handleChangeSelectedValue=(event)=>{
    setSelectedBookCategory(event.target.value)
  }
  const handleUpdate =(event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageUrl=form.imageUrl.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPdfUrl=form.bookPdfUrl.value;

    const updatebookobj={
      bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
    }
    console.log(bookobj);

    //send to mongodb
    fetch(`http://localhost:8280/book/${id}`),{
      method:'Patch',
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify(updatebookobj)
    }.then(res=>res.json()).then(data=>{
      //console.log(data)
      alert("Book is updated SuccesFully")
    });
  };
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>UpDate the Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap">
      <div className="flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" defaultValue={bookTitle} />
        </div> 
      </div>

      <div className="flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" name="authorName" type="text" placeholder="Author name" defaultValue={authorName}/>
        </div> 
      </div>

      <div className="flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="imageUrl" value="Book image Url" />
          </div>
          <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book image Url" defaultValue={imageUrl} />
        </div> 
      </div>

      <div className="flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <Select id="inputState" name="categoryName" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option)=> <option key={option} value={option}>{option}</option>)
            }
          </Select>
        </div> 
      </div>

      <div className="flex gap-8">
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" placeholder="Book Description..." required rows={4} defaultValue={bookDescription}/>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF Url" />
          </div>
          <TextInput id="bookPdfUrl" name="bookPdfUrl" type="text" placeholder="PDF Url" required defaultValue={bookPdfUrl} />
        </div>
      </div>
      <Button type="submit" className="mt-5" style={{ backgroundColor: "thistle", color: "black" }}>Update Book</Button>

      </form>
    </div>
  )
}

export default Editbooks
