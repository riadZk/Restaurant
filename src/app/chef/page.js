import React from 'react'
import { Great_Vibes } from 'next/font/google'
import Image from 'next/image'
const Great = Great_Vibes({
  subsets: ['latin'],weight: '400'
})
const page = () => {
  return (
    <div className='h-screen w-full bg-neutral-900'>
    <div className=' text-center'>
        <h1 className='text-yellow-200 text-5xl'><span className={Great.className}>Chef</span></h1>
        <p className='text-white font-bold text-4xl'>Our Master Chef</p>
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div>
            <img src={'/images/chef4.jpg'} className='h-60 w-40'/>
                <h1>John Smooth</h1>
                <p>Restaurant Owner</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
      </div>
    </div>
  )
}

export default page
