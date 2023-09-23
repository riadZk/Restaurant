import Image from 'next/image';
const Slider = () => {

  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <div className='flex text-sm flex-col items-center '>
            <Image
              src={'/images/Slider1.jpg'}
              alt={'Not Image'}
              height={75}
              width={75}
              className='rounded-[50%] w-30 h-20'
            />
            <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
            <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
          </div>
          <div className='flex text-sm flex-col items-center '>
            <Image
              src={'/images/Slider5.jpg'}
              alt={'Not Image'}
              height={75}
              width={75}
              className='rounded-[50%] w-30 h-20'
            />
            <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
            <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
          </div>
          <div className='flex text-sm flex-col items-center '>
            <Image
              src={'/images/slider3.jpg'}
              alt={'Not Image'}
              height={75}
              width={75}
              className='rounded-[50%] w-30 h-20'
            />
            <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
            <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
          </div>
          <div className='flex text-sm flex-col items-center '>
            <Image
              src={'/images/Slider4.jpg'}
              alt={'Not Image'}
              height={75}
              width={75}
              className='rounded-[50%] w-30 h-20'
            />
            <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
            <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
          </div>
      </div>
  );
};

export default Slider;



// 'use client'
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import Image from 'next/image';

// function Page() {
//   return (
//     <div className='px-10'>
//       <Swiper
//         slidesPerView={4}
//         loop={1}
//       >
//         <SwiperSlide>
//           <div className='flex text-sm flex-col items-center '>
//             <Image
//             src={'/images/Slider1.jpg'}
//             alt={'Not Image'}
//             height={75}
//             width={75}
//             className='rounded-[50%] w-30 h-20'
//             />
//             <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//             <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='flex text-sm flex-col items-center '>
//             <Image
//             src={'/images/Slider5.jpg'}
//             alt={'Not Image'}
//             height={75}
//             width={75}
//             className='rounded-[50%] w-30 h-20'
//             />
//             <h1 className='text-white font-bold  pt-2'>Grilled Beef with potatoes</h1>
//             <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='flex text-sm flex-col items-center '>
//             <Image
//             src={'/images/slider3.jpg'}
//             alt={'Not Image'}
//             height={75}
//             width={75}
//             className='rounded-[50%] w-30 h-20'
//             />
//             <h1 className='text-white font-bold  pt-2'>Grilled Beef with potatoes</h1>
//             <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='flex text-sm flex-col items-center '>
//             <Image
//             src={'/images/Slider4.jpg'}
//             alt={'Not Image'}
//             height={75}
//             width={75}
//             className='rounded-[50%] w-30 h-20'
//             />
//             <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//             <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='flex text-sm flex-col items-center '>
//             <Image
//             src={'/images/Slider1.jpg'}
//             alt={'Not Image'}
//             height={75}
//             width={75}
//             className='rounded-[50%] w-30 h-20'
//             />
//             <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//             <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='flex text-sm flex-col items-center '>
//             <Image
//             src={'/images/Slider1.jpg'}
//             alt={'Not Image'}
//             height={75}
//             width={75}
//             className='rounded-[50%] w-30 h-20'
//             />
//             <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//             <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//           </div>
//         </SwiperSlide>
//         </Swiper>

//     </div>
//   );
// }

// export default Page;


// 'use client'
// import React, { useEffect } from 'react';
// import Image from 'next/image';
// import 'swiper/css';
// import Swiper from 'swiper/bundle';
// const Slider = () => {
//   useEffect(() => {
//     const swiper = new Swiper('.swiper-container', {
//       slidesPerView: 2,
//       spaceBetween: 30,
//       loop: true, 
//       autoplay: {
//         delay: 1000,
//       }
//     });
//     return () => {
//       swiper.destroy();
//     };
//   }, []);

//   <div className="swiper-container">
//   <div className="swiper-wrapper">
//     <div className="swiper-slide">
//       <div className='flex text-sm flex-col items-center '>
//         <Image
//           src={'/images/Slider1.jpg'}
//           alt={'Not Image'}
//           height={75}
//           width={75}
//           className='rounded-[50%] w-30 h-20'
//         />
//         <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//         <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//       </div>
//     </div>
//     <div className="swiper-slide"><div className='flex text-sm flex-col items-center '>
//       <Image
//         src={'/images/Slider5.jpg'}
//         alt={'Not Image'}
//         height={75}
//         width={75}
//         className='rounded-[50%] w-30 h-20'
//       />
//       <h1 className='text-white font-bold  pt-2'>Grilled Beef with potatoes</h1>
//       <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//     </div></div>
//     <div className="swiper-slide"><div className='flex text-sm flex-col items-center '>
//       <Image
//         src={'/images/slider3.jpg'}
//         alt={'Not Image'}
//         height={75}
//         width={75}
//         className='rounded-[50%] w-30 h-20'
//       />
//       <h1 className='text-white font-bold  pt-2'>Grilled Beef with potatoes</h1>
//       <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//     </div></div>
//     <div className="swiper-slide"><div className='flex text-sm flex-col items-center '>
//       <Image
//         src={'/images/Slider4.jpg'}
//         alt={'Not Image'}
//         height={75}
//         width={75}
//         className='rounded-[50%] w-30 h-20'
//       />
//       <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//       <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//     </div></div>

//     <div className="swiper-slide"><div className='flex text-sm flex-col items-center '>
//       <Image
//         src={'/images/Slider4.jpg'}
//         alt={'Not Image'}
//         height={75}
//         width={75}
//         className='rounded-[50%] w-30 h-20'
//       />
//       <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//       <p className='text-white'>Meat, Potatoes, Rice, Tomatoe</p>
//     </div></div>
//     <div className="swiper-slide">
//       <div className='flex text-sm flex-col items-center '>
//         <Image
//           src={'/images/Slider1.jpg'}
//           alt={'Not Image'}
//           height={75}
//           width={75}
//           className='rounded-[50%] w-30 h-20'
//         />
//         <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//         <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//       </div></div>
//     <div className="swiper-slide"><div className='flex text-sm flex-col items-center '>
//       <Image
//         src={'/images/Slider1.jpg'}
//         alt={'Not Image'}
//         height={75}
//         width={75}
//         className='rounded-[50%] w-30 h-20'
//       />
//       <h1 className='text-white font-bold pt-2'>Grilled Beef with potatoes</h1>
//       <p className='text-white  '>Meat, Potatoes, Rice, Tomatoe</p>
//     </div></div>
//   </div>