'use client'
import React from 'react'
import Link from 'next/link'
import './Navbar.module.css'
import { Inter ,Shalimar} from 'next/font/google'
const fonts = Inter({ subsets: ['latin'],weight:"400" })
const font = Shalimar({ subsets: ['latin'],weight:"400" })

const Navbar = () => {
  function scrollValue() {
    const navbar = document.getElementById('navbar');
    const nav = document.getElementById('nav');
    const scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
        nav.classList.remove('BgCol');
    } else {
        navbar.classList.add('BgColour');
        navbar.classList.add('BgCol');
    }
}
  window.addEventListener('scroll', scrollValue);
  const logo = '/images/Abstract_Chef_Cooking_Restaurant_Free_Logo__1_-removebg-preview.png'
  return (
    <div id='navbar' className='bg-trasnparent px-4 fixed z-20 w-full top-0 left-0 '>
      <nav id='nav' className={fonts.className}>
      <div className=" mx-auto mt-4 flex justify-between justify-items-center items-center px-10">
        <div className="text-white  font-bold ">
        <h1 className='text-4xl text-white font-bold'>
          <span className={font.className}>SavorSphere</span>
        </h1>
        </div>
        <ul className="flex space-x-4 pt-2 text-sm  text-white pr-20 font-bold items-center">
          <li>
            <Link href="/" className='hover:text-yellow-200 '>Home</Link>
          </li>
          <li>
            <Link href="/about" className='hover:text-yellow-200 '>About</Link>
          </li>
          <li>
            <Link href="/service" className='hover:text-yellow-200 '>Service</Link>
          </li>
          <li>
            <Link href="/contact" className='hover:text-yellow-200 '>Menu</Link>
          </li>          
          <li>
            <Link href="/contact" className='hover:text-yellow-200 '>Contact</Link>
          </li>
        </ul>

        <button type="button" className="text-gray-900 bg-white border
         border-gray-300 focus:outline-none
          hover:bg-gray-100 focus:ring-4
           focus:ring-gray-200 font-bold 
           rounded-lg text-sm px-5 py-2.5 mr-2 mt-3 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">        Book a table
</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
