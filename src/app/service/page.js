'use client'
import React from 'react'
import { HiOutlineCake } from 'react-icons/hi'
import { BiSolidBusiness } from 'react-icons/bi'
import { FaBowlFood  } from 'react-icons/fa6'
import { Great_Vibes } from 'next/font/google'
const Great = Great_Vibes({
  subsets: ['latin'],
  weight: '400'
})
const page = () => {
  return (
    <div className='w-full h-auto bg-neutral-900 py-10'>
      <div className='text-center'>
        <h1 className="text-5xl text-yellow-200">
          <span className={Great.className}>Service</span>
        </h1>
        <p className='text-white font-bold text-4xl '>Catering Services</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 mx-3 pt-6'>
        <div className='flex flex-col text-white justify-center gap-3 items-center'>
          <span><HiOutlineCake size={40} className=' text-yellow-200' /></span>
          <h1 className='text-white font-bold'>Birthday Party</h1>
          <p className='text-center '>
            Celebrate your special day with a memorable birthday party at our restaurant!
            Our dedicated event team will work closely with you .
          </p>
        </div>
        <div className='flex flex-col text-white justify-center gap-3 items-center'>
          <span><BiSolidBusiness size={40} className=' text-yellow-200' /></span>
          <h1 className='text-white font-bold'>Business Meetings</h1>
          <p className='text-center '>
            Elevate your business meetings in a professional and comfortable setting at our restaurant.
            Our versatile event spaces .
          </p>
        </div>
        <div className='flex flex-col text-white justify-center gap-3 items-center'>
          <span><FaBowlFood size={40} className=' text-yellow-200' /></span>
          <h1 className='text-white font-bold'>Wedding Party</h1>
          <p className='text-center '>
            Make your dream wedding a reality at our exquisite restaurant.
            Our enchanting venue provides a romantic and intimate setting .
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
