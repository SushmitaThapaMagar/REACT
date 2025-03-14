import React from 'react'

const Card = ({book}) => {
    console.log(book)
  return (
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-10">
    <a href="#">
        <img class="rounded-t-lg" src="https://images-cdn.ubuy.co.in/664dcf28471622150a10a1af-the-alchemist-a-graphic-novel-hardcover.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
        </a>
        <div class="font-bold text-xl mb-2">{book.bookName}</div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The global orange market was valued at approximately USD 3.8 billion in 2024 and is projected to grow at a compound annual growth rate (CAGR) of about 4.30% to reach USD 5.8 billion by 2034.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  )
}

export default Card