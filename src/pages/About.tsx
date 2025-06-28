import React from 'react'
import { BsTwitch, BsTwitter } from 'react-icons/bs'

const About = () => {
  return (
    <>
    <div className='bg-slate-500 text-white text-center justify-center flex'>
        <h1 className='font-link text-7xl'>About</h1>
    </div>
    <div className='bg-slate-500 text-white text-center justify-center flex p-5'>
      <p className='font-thin text-lg sm:text-3xl sm:w-[50vw]' >
         Hello and Welcome, thank you for visiting my page! I am a professional illustrator/comic artist who sometimes does
         commission work. I reside in beautiful west Michigan with my family, cat, and chickens.  
         For Pictoshaman merch please visit:
         <a className='hover:text-green-500' href="https://pictoshaman-shop.fourthwall.com/"> Merch Here!</a> 
      </p>
    </div>
    <div className='justify-center flex bg-slate-500'>
      <img className='bg-slate-500 h-80 w-56' src="https://imagizer.imageshack.com/img923/4903/5ncUs7.png" alt="" />
    </div>
    <div className='flex space-x-5 justify-center p-8 bg-slate-500 h-32 sm:h-[30vh]'>
      <a href="https://www.twitch.tv/pictoshaman"><BsTwitch className='text-white text-3xl hover:text-green-500'/></a>
      <a href="https://twitter.com/JulienyaArt?t=wbJf8yZpF7Z91xZ_GjJxTg&s=07&fbclid=IwAR2qCc2zC8o8_Rum2LmYt0FvypNOJstxlyqurrEF2IXRk0FMyxANZv3UVdw"><BsTwitter className='text-white text-3xl hover:text-green-500'/></a>
    </div>

    </>
  )
}

export default About