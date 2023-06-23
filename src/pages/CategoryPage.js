import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import Title from '../components/Title';

const CategoryPage = () => {
  

  const location = useLocation();
  const category = location.pathname.split('/').at(-1).replaceAll('%20',' ');
  const title = `Blogs Category ${category}`

  return (
    <div>
      <Header/>
      <div className='py-16 mx-auto w-11/12 max-w-2xl '>
        <Title title = {title} />
        <Blogs/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default CategoryPage