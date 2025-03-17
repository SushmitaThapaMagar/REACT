import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

const AddBook = () => {


    const [bookName,setBookName]= useState('')
    const [bookPrice,setBookPrice]= useState('')
    const[isbnNumber,setIsbnNumber]=useState(null)
    const[authorName,setAuthorName]=useState('')
    const[publishedAt,setPublishedAt]=useState('')
    const[publication,setPublication]=useState('')
    const[image,setImage]=useState(null)

    const handleSubmit= async(e)=>{

        e.preventDefault()
       const response=await axios.post('http://localhost:3000/book',{
            bookName,
            bookPrice,
            isbnNumber,
            authorName,
            publishedAt,
            publication,
            image

        },{
            headers :{
                'Content-Type' : 'multipart/form-data'
            }
        })

    }



  return (
   <>
   <NavBar/>
   <section class="bg-white dark:bg-gray-900">
  <div class="m-40 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-pink-900 md:text-2xl dark:text-white">
                  Add Book
              </h1>
              <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="bookName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
                      <input type="text" name="bookName" id="bookName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Painted It Red" required="" onChange={(e)=>setBookName(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="bookPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Price</label>
                      <input type="number" name="bookPrice" id="bookPrice" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required="" onChange={(e)=>setBookPrice(e.target.value)}/>
                  </div>

                  <div>
                      <label htmlFor="isbnNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN Number</label>
                      <input type="number" name="isbnNumber" id="isbnNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0120" required="" onChange={(e)=>setIsbnNumber(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="authorName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
                      <input type="text" name="authorName" id="authorName" placeholder="Charles Buksowki" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setAuthorName(e.target.value)}/>
                  </div>


                  <div>
                      <label htmlFor="publishedAt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Published At</label>
                      <input type="date" name="publishedAt" id="publishedAt" placeholder="2024-02-20" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setPublishedAt(e.target.value)} />
                  </div>

                  <div>
                      <label htmlFor="publication" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publication</label>
                      <input type="text" name="publication" id="publication" placeholder="English" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setPublication(e.target.value)}/>
                  </div>

                  <div>
                      <label htmlFor="bookImage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Image</label>
                      <input type="file" name="image" id="bookImage" placeholder="English" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setImage(e.target.files[0])}/>
                  </div>
            
                  <button type="submit" class="w-full p-2 bg-pink-800 text-white rounded-md hover:bg-pink-900">Add Book</button>
            
              </form>
          </div>
      </div>
  </div>
</section>


   </>
  )
}

export default AddBook