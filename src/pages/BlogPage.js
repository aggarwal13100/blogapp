import React, { useContext, useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { relatedBlogUrl } from '../baseUrl';
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Card from '../components/Card';
import { AppContext } from '../context/AppContext';
const BlogPage = () => {
  const [blog , setBlog] = useState(null);
  const [relatedBlogs , setRelatedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const {loading , setLoading} = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${relatedBlogUrl}?blogId=${blogId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();

      if(!data) {
        throw new Error("Something went Wrong");
      }

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

    } catch(error) {

      console.log("Error in fetching the Related Blogs Data ", error);
      setBlog(null);
      setRelatedBlogs([]);

    }
    setLoading(false) ;
  }

  useEffect(() => {
    if(blogId) {
      fetchRelatedBlogs()
    }
    // eslint-disable-next-line
  }, [location.pathname])


  return (
    <div>
      <Header/>
      <div  className='py-16 mx-auto w-11/12 max-w-2xl'>
        <button className='border bg-bg-secondary text-text-primary p-1 px-2 rounded-lg text-sm font-semibold '
          onClick={() => {navigate(-1)}}
        >
          Back
        </button>
        {
          loading ? <Spinner/> :
          blog ? (
            <div>
              <Card post = {blog}/>
              <h2 className='font-bold text-text-primary text-xl pl-2'>Related Blogs</h2>
              {relatedBlogs.map((post) => (<Card key={post.id} post = {post}/>))}
            </div>
            ) :
          <div>
            No Blog Found 
          </div>
        }
      </div>
    </div>
  )
}

export default BlogPage