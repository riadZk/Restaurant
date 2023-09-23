import { Great_Vibes,East_Sea_Dokdo } from "next/font/google"
import Image from "next/image"

const Great = Great_Vibes({
  subsets: ['latin'],
  weight:'400'
})
const fonts = East_Sea_Dokdo({ subsets: ['latin'],weight:"400" })

function page (){

  return (
    <div className="h-screen bg-black w-full text-white">
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-10 content-center mx-10">
        <Image
        src={'/images/chef1.jpg'}
        height={70}
        width={70}
        alt="Not found "
        className="w-96 bg-cover mt-20 bg-center rounded-sm"
        />
        <div className="flex flex-col gap-10 mt-20">
        <Image
        src={'/images/chef2.jpg'}
        height={70}
        width={70}
        alt="Not found "
        className="w-96  bg-cover rounded-sm bg-center"
        />
        <Image
        src={'/images/chef3.jpg'}
        height={70}
        width={70}
        alt="Not found "
        className="w-96  bg-cover rounded-sm bg-center"
        />
        </div>
        </div>
        <div className="flex h-screen justify-center flex-col items-center">
            <h1 className='text-4xl text-yellow-200'>
              <span className={Great.className}>About us</span>
            </h1>
            <h1 className="text-4xl ">
              <span className={fonts.className}>SavorSphere</span>
            </h1>
            <p className="font-bold text-xl mt-5 text-center">
            A small river named Duden flows by their <br/>
            place and supplies it with the necessary regelialia. <br/>
            It is a paradisematic country, in which roasted <br/>
            parts of sentences fly into your mouth.<br/>
            </p>
        </div>  
      </div>
    </div>
  )
}

export default page
