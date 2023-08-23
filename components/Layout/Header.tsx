// components/Layout/Header.tsx
import React from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'


const Header = () => {
  const { user } = useUser()
  return (
    // <header className="text-gray-600 body-font">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    //       <svg
    //         className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    //         ></path>
    //       </svg>
    //     </Link>
    //     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    //       {user ? (
    //         <div className="flex items-center space-x-5">
    //               <div className="flex items-center justify-center mr-5 capitalize bg-blue-500 py-1 px-3 rounded-md text-white">
    //           <Link href="/admin">
    //               + Create
    //           </Link>
    //         </div>
    //           <Link href="/api/auth/logout" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    //             Logout
    //           </Link>
    //           <img alt="profile" className="rounded-full w-12 h-12" src={user.picture ? user.picture : ''} />
    //         </div>
    //       ) : (
    //         <Link href="/api/auth/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    //           Login
    //         </Link>
    //       )}
    //     </nav>
    //   </div>
    // </header>
    
<nav className="bg-[#F9F9F9] border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
  <div className="flex items-center md:order-2">
    <div className='flex items-center '>
    <p>Julia</p>
      <button type="button" className="flex mx-6 text-sm bg-gray-800 rounded-full md:mx-3 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        
        <img className="w-8 h-8 rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUVFRcXFxcVGBgXFRcVFRUXFxcVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDysZFRktLSsrKysrLTc3KzcrLSstLSsrNzctNzc3Ny0tNys3Ny0rLS03KzctNzc3LSstLS03Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAJhABAQEAAAQFBAMAAAAAAAAAAAERAiFh8BIxQVHBobHR8XGBkf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A4xUWswYW1FQADAWJSUoC2CWgGkQVQhRCotQUWJQFol5KChgICWqCYqwsA0hhAAAZUAEXUBFABQgJQAEUFABChxIKVYaCBBRVgiiCYlUFhQtAIYaC6JoCIqApq1AQKaApDQECgYSJgK0gtEShUFXFzkhoi1BYBKLEAA0BUAWgoJy7xVz+VBjWVKCoGghgUACAIpQRUUUioAUC0C0iaoAoIAUEpi4mAukiyACpFnfUDl7KxgAUxAUNUGSKgEhhpgLqUAII1ATWqyaBUa1BUUURFSLQBqM2gBpQFtSKBpI14WbQPFVTw98gCVMIlgCpFoIACKmLBSglAVNWAUJFETEqpAWAsAioQCwq1KCQFAxYmkoNaza1EoM6LnfdUEiWLCgiosoEqGoAqasAWxNWgkiyJiwFgJQNKyoGrEIiqsQVFSwpgBUUBUqwFiLYmUDRM6BQOI0AkVmLoJErTNgKQ0gLogAGgLAhQQACVeogNWVDVAQAEq4AjUTAFMWRATA5e8/wBBSggQBcRUBMa1MMBZCoUEWVK1KKRcSAhai4YCSkMXAXRCAst79wsQE0qgCxAFpUiwEDb1ARUAAAVKUBFCAJY0gIsMBVEURLVnpzzvpzSgEqxmNQDFiAGi1nAUpIUANICwlQBc6CAItEAVMXAKi4gIpSUFQ0BFRoDCqmAgACxJFwDVSRQQEwAUgEAwFkTdFBBrwzv9gM6hpoFAwFRalAtEigaULQTGozjUFDUgIigKpiRbRFEUBDV0GYoAtJTixICxKqAb3qpgCUtCAKEAqKUEtEqyAtiU0tBMaiasASqgGgABFAVFAiKgAAKkVMBdSqkgKADOCFBYBAWoqACYCgqALEaBIUKIYimCmqkBFppFoIGAFNAAFARZUwDev3ABEvygDUJ39ABq/n7s8XoAF+EnkANRADCr6gBxJQBanuALPwABPT+1ACpxACcPy1PKgKxFAFvkkARQBX/9k=" alt="user photo" />
 
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
</div>
 
      {/* <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div> */}
      {/* <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
  </div>
  <div className="relative w-[65%] text-gray-600">
  <input type="search" name="serch" placeholder="Search" className="bg-white w-[100%] h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/>
  <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px">
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
    </svg>

  </button>
</div>
  </div>
</nav>

  )
}

export default Header