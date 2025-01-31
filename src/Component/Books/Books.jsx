import {  useState } from "react";
import Book from "./Book";
import { useLoaderData } from "react-router-dom";



const Books = () => {
     const loadbooks = useLoaderData() || []
    const [books,setBooks]= useState(loadbooks)
  

    return (
        <div>
            
        <div className="grid grid-cols-3 gap-6">
        {
            books.map((book)=><Book key={book._id} book={book} books={books} setBooks={setBooks}></Book>)
         }
        </div>
        </div>
    );
};

export default Books;