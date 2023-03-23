import React from 'react'
import Gallery2 from '../components/Gallery2'
import MyGallery from '../components/MyGallery'

const Gallery = () => {

   


  return (
    <div className='bg-slate-500'>
        <br />
        <div className='text-white text-center'>
            <h1 className='font-link font-bold text-3xl'>Art Gallery</h1>
            <h1 className='p-5 text-xl'>Digital Art</h1>
        </div>
     
       <MyGallery/>

        <br /><br />
        <div className='text-white text-center p-5'>
          <h1 className='text-xl'>Traditional Art</h1>
        </div>
        <Gallery2 />
    </div>
  )
}

export default Gallery