import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
  const {id} = useParams()
  console.log(id)

  const navigate = useNavigate()
  const [data,setData] = useState({
    bookName : '',
    bookPrice : '',
    isbnNumber : null,
    authorName : '',
    publishedAt : '',
    publication : '',
  })
  const [image,setImage] = useState(null)
  
  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({
      ...data,
      [name] : value
    })
  
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    
    Object.entries(data).forEach(([key,value])=>{
      formData.append(key,value)
    })
    formData.append('image',image)
  
    const response = await axios.patch("http://localhost:3000/book/" + id,formData)
    if(response.status === 200){
      navigate("/book/" +id)
    }else{
      alert("Something went wrong")
    }
  
  }

  const fetchBook = async() =>{
   const response = await axios.get("http://localhost:3000/book/" + id)
   if(response.status === 200){
    console.log(response.data.data)
    setData(response.data.data)
  }
  }
useEffect(()=>{
  fetchBook()
},[])

  return (
    <>
    <NavBar />
    <section class="bg-white dark:bg-gray-900">
   <div class="m-40 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 class="text-xl font-bold leading-tight tracking-tight text-pink-900 md:text-2xl dark:text-white">
                   Edit Book
               </h1>
               <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                   <div>
                       <label htmlFor="bookName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
                       <input type="text" name="bookName" id="bookName" value={data.bookName} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" onChange={handleChange}/>
                   </div>
                   <div>
                       <label htmlFor="bookPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Price</label>
                       <input type="number" name="bookPrice" id="bookPrice" value={data.bookPrice} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" onChange={handleChange}/>
                   </div>
 
                   <div>
                       <label htmlFor="isbnNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN Number</label>
                       <input type="number" name="isbnNumber" id="isbnNumber" value={data.isbnNumber} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" onChange={handleChange}/>
                   </div>
                   <div>
                       <label htmlFor="authorName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
                       <input type="text" name="authorName" id="authorName" value={data.authorName} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                   </div>
 
 
                   <div>
                       <label htmlFor="publishedAt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Published At</label>
                       <input type="date" name="publishedAt" id="publishedAt" value={data.publishedAt} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange} />
                   </div>
 
                   <div>
                       <label htmlFor="publication" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publication</label>
                       <input type="text" name="publication" id="publication" value={data.publication} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                   </div>
 
                   <div>
                       <label htmlFor="bookImage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Image</label>
                       <input type="file" name="image" id="bookImage" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setImage(e.target.files[0])}/>
                   </div>
             
                   <button type="submit" class="w-full p-2 bg-pink-800 text-white rounded-md hover:bg-pink-900">Edit Book</button>
             
               </form>
           </div>
       </div>
   </div>
 </section>
 
 
    </>
  )
}

export default EditBook