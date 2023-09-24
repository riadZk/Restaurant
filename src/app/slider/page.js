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

