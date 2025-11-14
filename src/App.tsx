import { useState } from 'react'
import { MdMenu, MdOutlineCancel } from "react-icons/md";
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return <nav className='bg-sky-500'>
    <div className='h-14 items-center flex justify-between'>
      {/* LOGO */}
      <div className='text-3xl text-white font-bold px-4'>CodeFlux</div>

      {/*DESKTOP BUTTONS*/}
      <div className='hidden sm:block'>
        <a href='' className='text-gray-50 text-lg px-4' >HOME</a>
        <a href='' className='text-gray-50 text-lg px-4' >ABOUT</a>
        <a href='' className='text-gray-50 text-lg px-4' >SERVICES</a>
        <a href='' className='text-gray-50 text-lg px-4' >CONTACT</a>
      </div>

      {/*MENU BUTTON*/}
      <button className='block sm:hidden px-4 text-white text-3xl' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <MdOutlineCancel /> : <MdMenu />}</button>

    </div>
    {/*MOBILE BUTTONS*/}
    <div className={`${isOpen ? "block" : "hidden"
      } sm:hidden bg-gray-100 space-y-2 pb-3`}>
      <a href='' className='text-gray-600 text-lg px-4 block' >HOME</a>
      <a href='' className='text-gray-600 text-lg px-4 block' >ABOUT</a>
      <a href='' className='text-gray-600 text-lg px-4 block' >SERVICES</a>
      <a href='' className='text-gray-600 text-lg px-4 block' >CONTACT</a>
    </div>

  </nav>
}

export default App
