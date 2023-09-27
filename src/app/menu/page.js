
import Image from 'next/image'
import { Great_Vibes } from 'next/font/google'


const Great = Great_Vibes({ subsets: ['latin'], weight: "400" })

export default function page() {
    return (
        <div className='h-auto w-full bg-gray-100 text-neutral-900'>
            <div className='text-center'>
                <h1 className="text-5xl text-yellow-200">
                    <span className={Great.className}>Specialties</span>
                </h1>
                <p className='text-white font-bold text-4xl '>Our Menu</p>
            </div>
            <div className='grid grid-cols-2 mx-20 bg-white'>
                {/* First GRID */}
                <div className='grid grid-cols-2'>
                    <img
                        src={'/images/pizza.jpg'}
                        alt={'Not Image'}
                        className={' h-48 w-full bg-cover bg-no-repeat bg-center'}
                    />
                    <div className='flex flex-col gap-5 p-3 items-start'>
                    <p className='text-ms '>Grilled Beef with potatoes</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Architecto illo delectus...

                    </p>
                    <button className='text-yellow-200 font-bold text-xl'>
                        $12.00
                    </button>
                    </div>
                    </div>
                <div className='grid grid-cols-2'>
                    <img
                        src={'/images/jonathan-borba.jpg'}
                        alt={'Not Image'}
                        className={' h-48 w-full bg-cover bg-no-repeat bg-center'}
                    />
                    <div className='flex flex-col gap-5 p-3 items-start'>
                    <p className='text-ms '>Grilled Beef with potatoes</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Architecto illo delectus...

                    </p>
                    <button className='text-yellow-200 font-bold text-xl'>
                        $12.00
                    </button>
                    </div>
                </div>
            </div>
            {/* second GRID */}
            <div className='grid grid-cols-2 mx-20 bg-white'>
                <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-5 p-3 items-start'>
                    <p className='text-ms '>Grilled Beef with potatoes</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Architecto illo delectus...

                    </p>
                    <button className='text-yellow-200 font-bold text-xl'>
                        $12.00
                    </button>
                    </div>
                    <img
                        src={'/images/pexels-dana-tentis-552056.jpg'}
                        alt={'Not Image'}
                        className={' h-48 w-full bg-no-repeat bg-center'}
                    />
                    </div>
                <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-5 p-3 items-start'>
                    <p className='text-ms '>Grilled Beef with potatoes</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Architecto illo delectus...

                    </p>
                    <button className='text-yellow-200 font-bold text-xl'>
                        $12.00
                    </button>
                    </div>
                    <img
                        src={'/images/jonathan-borba.jpg'}
                        alt={'Not Image'}
                        className={' h-48 w-full bg-cover bg-no-repeat bg-center'}
                    />
                </div>
            </div>
            {/* Third GRID */}
            <div className='grid grid-cols-2 mx-20 bg-white'>
                <div className='grid grid-cols-2'>
                    <img
                        src={'/images/pizza.jpg'}
                        alt={'Not Image'}
                        className={' h-48 w-full bg-cover bg-no-repeat bg-center'}
                    />
                    <div className='flex flex-col gap-5 p-3 items-start'>
                    <p className='text-ms '>Grilled Beef with potatoes</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Architecto illo delectus...

                    </p>
                    <button className='text-yellow-200 font-bold text-xl'>
                        $12.00
                    </button>
                    </div>
                    </div>
                <div className='grid grid-cols-2'>
                    <img
                        src={'/images/jonathan-borba.jpg'}
                        alt={'Not Image'}
                        className={' h-48 w-full bg-cover bg-no-repeat bg-center'}
                    />
                    <div className='flex flex-col gap-5 p-3 items-start'>
                    <p className='text-ms '>Grilled Beef with potatoes</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Architecto illo delectus...

                    </p>
                    <button className='text-yellow-200 font-bold text-xl'>
                        $12.00
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


