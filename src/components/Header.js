import React, { useContext } from 'react'
import {MdDarkMode,MdOutlineLightMode} from 'react-icons/md'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom';

const Header = () => {
  const {darkMode , setDarkMode} = useContext(AppContext);
  
  const clickHandler = () => {
    if(darkMode) {
      document.body.classList.remove('dark');
    }
    else {
      document.body.classList.add('dark');
    }
    setDarkMode(!darkMode);
  }
  return (
    <header className='bg-bg-secondary border-b-1 shadow-md fixed top-0 w-screen'>
      <h1 className='text-2xl text-text-primary italic font-bold text-center py-2 relative'>
        <Link to='/'>Trending Blogs</Link>
      </h1>
      <span className='absolute [760px]:right-28 sm:right-16 right-8 bottom-2'>
        <button
        className=' p-2 rounded-full bg-bg-primary shadow-bg-primary text-text-primary'
         title={`Switch to ${darkMode? "Light Mode" : "Dark Mode"}`}
         onClick={clickHandler}>
          {darkMode ? <MdOutlineLightMode/> : <MdDarkMode/> }
        </button>
      </span>
    </header>
  )
}

export default Header