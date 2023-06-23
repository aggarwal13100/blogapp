import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl';
import { useNavigate } from "react-router-dom";

// Creating a context
export const AppContext = createContext();

// Provide the context to a component
export default function AppContextProvider({children}) {
    const [darkMode,setDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // fetching the Blog Posts
    async function fetchBlogPosts(page=1 , tag = null , category) {
        // Enable Loading screen while fetching the posts
        setLoading(true);
        
        // Now the modifying the api url depending on the Request
        let url = `${baseUrl}?page=${page}`;
        
        // tag is present 
        if(tag) {
            console.log("inside tag")
            url += `&tag=${tag}`;
        }
        
        // category is present 
        if(category) {
            console.log("inside catergory")
            url += `&category=${category}`;
        }
        console.log(url)

        try{
            
            const result = await fetch(url);
            const data = await result.json();
            
            if(!data.posts) 
                throw new Error("Something Went Wrong");

            // initializing or updating the context data
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            console.log(data.posts)
            
        } catch(error) {
            
            console.log("Error in fetching the BlogPosts " , error);
            // set to default
            setPosts([]);
            setTotalPages(null);
            setPage(1);
        }
        
        // fetching data done remove Loading screen
        setLoading(false);

    }

    function handlePageChange(page) {
        navigate({search : `?page=${page}`});
        setPage(page);
    }

    const value = {
        loading , setLoading,
        posts, setPosts,
        page , setPage,
        totalPages , setTotalPages,
        darkMode , setDarkMode ,
        fetchBlogPosts,
        handlePageChange
    }

    // sending the context to the provider
    return  <AppContext.Provider value = {value} >
        {children}
    </AppContext.Provider>
}