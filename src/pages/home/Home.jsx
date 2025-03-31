import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import Card from '../components/Card'
import axios from 'axios'
import { backendUrl } from '../config'

const Home = () => {
const[books, setBooks] = useState([])
const fetchBooks =async() =>{

  const response = await axios.get(`${backendUrl}/book`)
 if(response.status===200){
  setBooks(response.data.data)
 }
}

useEffect(()=>{
fetchBooks()
},[])
console.log(books)

  return (
    <>
    < Navbar/>
    <div className='flex flex-wrap justify-evenly mt-25'>
    {
      books.length>0 && books.map((book)=>{
        return (
          <Card book={book}/>
        )
      })
    }

    </div>
    </>
  )
}

export default Home