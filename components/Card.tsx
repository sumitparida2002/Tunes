// components/Layout/Header.tsx
import React from 'react'


const Card = (props: any) => {
    console.log(props);
  return (
<div className=" bg-gray-100 flex justify-center items-center ">
  <div className="container flex justify-center">
    <div className="max-w-sm ">
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img className="rounded-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
       
        <div className="absolute top-2 right-2 py-2 px-2 bg-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
        </div>
      </div>
      <div className="py-3 px-2  bg-[#F9F9F9] ">
          <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{props.props.name}</h1>
          <p className="text-gray-700    tracking-wide">by {props.props.artist}</p>
        </div>
    </div>
  </div>
</div>
  )
}

export default Card
