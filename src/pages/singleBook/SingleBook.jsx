import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
const {id} = useParams()
const [book, setBook]=useState({})
console.log(id)

const fetchBook = async()=>{
  const response = await axios.get(`http://localhost:3000/book/${id}`)
  if(response.status===200){
    setBook(response.data.data)
  }
}
useEffect(()=>{
  fetchBook()
},[])
console.log(book)

  return (
    <>
    <NavBar />
    <div class="m-19 p-1 max-w-sm bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-300">
    <a href="#">
    <img class="rounded-t-lg" src={book.imageUrl ? book.imageUrl : "https://fr.web.img3.acsta.net/pictures/21/08/04/17/39/2012034.jpg"} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
        </a>
        <div class="font-bold text-xl mb-2">{book.bookName}</div>
        <p class="text-gray-700 text-base">Rs.{book.bookPrice}</p>
        <p class="text-black-700 text-base">ISBN no. : {book.isbnNumber} </p>
        <p class="text-black-700 text-base">Author Name : {book.authorName} </p>
        <p class="text-black-700 text-base">Published Date : {book.publishAt} </p>
        <p class="text-black-700 text-base">Publication : {book.publication} </p>

<button className='bg-pink-600 p-1 px-3'>
Delete
</button>
<Link to={`/editBook/${book._id}`} >
<button className='bg-pink-600 p-1 px-3 ml-4'>
Edit
</button></Link>

    </div>
</div>

    </>
  )
}

export default SingleBook