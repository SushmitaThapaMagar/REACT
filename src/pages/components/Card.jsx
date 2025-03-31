import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({book}) => {
    const navigate=useNavigate()
    console.log(book)
  return (
    
<div class="m-2 max-w-sm bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-white dark:border-white mb-10">
    <a href="#">
        <img class="rounded-t-lg" src={book.imageUrl ? book.imageUrl : "https://fr.web.img3.acsta.net/pictures/21/08/04/17/39/2012034.jpg"} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
        </a>
        <div class="font-bold text-xl mb-2">{book.bookName}</div>
        <p class="text-gray-700 text-base">Rs. {book.bookPrice}</p>
        <p class="text-black-700 text-base">ISBN no. : {book.isbnNumber}</p>
    
        <Link to={`/book/${book._id}`}>See More</Link>
           
 

    </div>
</div>

  )
}

export default Card