import { East_Sea_Dokdo, Shalimar } from 'next/font/google'
import Slider from './slider/page'
import About from './about/page'
import Word from './word/page'

const fonts = East_Sea_Dokdo({ subsets: ['latin'], weight: "400" })
const font = Shalimar({ subsets: ['latin'], weight: "400" })

export default function Home() {

  const src = '/images/pexels-lucas-allmann-1378424.jpg';

  return (
    <div className='h-auto'>
      <div className='bg-cover bg-center overflow-hidden bg-no-repeat h-screen'
        style={{
          backgroundImage: `url(${src})`,
        }}>
        <div className='h-screen w-full' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='flex h-[75%] w-full justify-end pb-20 font-bold text-white flex-col items-center '>
            <h1 className='text-7xl text-white'>
              <span className={font.className}>SavorSphere</span>
            </h1>
            <p className='text-white text-3xl'><Word /></p>
          </div>
          <div className='w-full h-[25%]'>
            <Slider />
          </div>
        </div>
      </div>
      <About />
    </div>
  )
}
