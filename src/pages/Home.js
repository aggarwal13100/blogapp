import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blogs from '../components/Blogs'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className='my-12'>
        <Blogs/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home