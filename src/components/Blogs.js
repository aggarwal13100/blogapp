import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card'
const Blogs = () => {
  const {loading , posts } = useContext(AppContext);
  
  return (
    <div className='py-2 mx-auto w-11/12 max-w-2xl '>
      {
        // showing the loading page if loading true
        loading ? <Spinner/> :
        (
          // No post to show
          posts.length === 0 ? 
          (<div className='w-full h-full flex justify-center items-center bold italic'>
            No Post Found
          </div>) :
          // Each post is showing the help of component 'Card'
          (
            posts.map((post) => (<Card key={post.id} post={post}/>))
          )
        )
      }
    </div>
  )
}

export default Blogs; 