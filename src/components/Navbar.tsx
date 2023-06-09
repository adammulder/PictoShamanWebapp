import React, {useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import { FaBars } from 'react-icons/fa'
import { Transition } from '@headlessui/react'



const Navbar = () => {
    const [isHome, setIsHome] = useState(false);
    const [isOpen, setIsopen] = useState(false)
    let location = useLocation();

  anime({
    targets: 'button',
    translateZ: 250,
    rotate: '1turn',
    duration: 800
  });

  useEffect(() => {
    //Checks if location.pathname is not "/".
    if (location.pathname !== "/") setIsHome(false);
    else setIsHome(true);
  }, [location]);
 
  
  return (
    <>
    
    { isHome ? (
    <div className="bg-[url('https://scontent-ord5-2.xx.fbcdn.net/v/t1.15752-9/336207821_1322088945316294_6265849050340441417_n.png?stp=dst-png_s2048x2048&_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=H7ovYRVuNaUAX-pUpeY&_nc_ht=scontent-ord5-2.xx&oh=03_AdSCSnlwNUQb8Loi0-pCkl8KdLmMq5x2W7sBa93L9yNVKw&oe=64416B8D')]
        h-auto">
        <div className='flex place-content-center place-items-center text-slate-100 text-xl h-[94vh] sm:h-[91vh] '>
            <h1 className='font-link text-6xl sm:text-8xl'>PictoShaman</h1>
        </div>
        <div className='flex justify-center space-x-3 p-3 font-link text-2xl sm:text-5xl sm:p-5 sm:space-x-9 text-slate-100 '>
                <button><Link className='hover:text-green-500' to='/'>Home</Link></button>
                <button><Link className='hover:text-green-500' to='/gallery'>Gallery</Link></button>
                <button><Link className='hover:text-green-500' to='/about'>About</Link></button>
                <button><Link className='hover:text-green-500' to='/contact'>Contact</Link></button>   
        </div>
    </div>
    ) : (
    <div className="bg-[url('https://scontent-ord5-2.xx.fbcdn.net/v/t1.15752-9/336207821_1322088945316294_6265849050340441417_n.png?stp=dst-png_s2048x2048&_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=H7ovYRVuNaUAX-pUpeY&_nc_ht=scontent-ord5-2.xx&oh=03_AdSCSnlwNUQb8Loi0-pCkl8KdLmMq5x2W7sBa93L9yNVKw&oe=64416B8D')] bg-cover">
    <div className='flex place-content-center place-items-center text-white sm:text-slate-500 text-xl h-40 justify-between'>
    <h1 className='font-link text-4xl p-5 sm:text-8xl'>PictoShaman</h1>
    <button onClick={() => setIsopen((isOpen) => !isOpen)} className='flex justify-end justify-items-end p-5 text-3xl hover:text-green-500'><FaBars></FaBars></button>
    <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div onClick={() => setIsopen(!isOpen)} className='font-link text-3xl block text-white sm:flex  sm:text-slate-500 text-center sm:space-x-8 sm:p-5 ' >
                <button><Link className='hover:text-green-500' to='/'>Home</Link></button>
                <button><Link className='hover:text-green-500' to='/gallery'>Gallery</Link></button>
                <button><Link className='hover:text-green-500' to='/about'>About</Link></button>
                <button><Link className='hover:text-green-500' to='/contact'>Contact</Link></button>
        </div>
      </Transition>
    </div>
    </div>
    )}
    </>
  )
}

export default Navbar