import React, { useState } from 'react'
import Gallery2 from '../components/Gallery2'
import MyGallery from '../components/MyGallery'
import MyModal from '../components/MyModal'

const Gallery: React.FC = () => {

   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true)


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
        {/* Button to open the dialog */}
        <div className="text-center p-5">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            NSFW notice
          </button>
        </div>

      {/* Pass state to MyModal */}
      <MyModal isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </div>
  )
}

export default Gallery