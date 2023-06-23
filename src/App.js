import './App.css';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage'
import { AppContext } from './context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';

function App() {

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    // depending on the url calling the fetchBlogPosts with the different parameters
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes('tags')) {
      // replacing the all '-' with space in tag name
      const tag = location.pathname.split('/').at(-1);
      fetchBlogPosts(Number(page) , tag);
    }
    else if(location.pathname.includes('categories')) {
      // replacing the all '-' with space in category name
      const category = location.pathname.split('/').at(-1).replaceAll(' ','-');
      fetchBlogPosts(Number(page) , null , category);
    }
    else{
      // both category and tag is not present in url
      fetchBlogPosts(Number(page));
    }
    // eslint-disable-next-line
  } , [location.pathname, location.search] );

  return (
    <div className='bg-bg-primary min-w-screen min-h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>}/>
        <Route path='/tags/:tag' element={<TagPage/>}/>
        <Route path='/categories/:category' element={<CategoryPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
