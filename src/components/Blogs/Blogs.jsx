import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from 'prop-types';

const Blogs = ({handleAddBookmark}) => {
    const[blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=> <Blog 
                blog={blog}
                key={blog.id}
                handleAddBookmark={handleAddBookmark}
                ></Blog>)
            }
        </div>
    );
};



export default Blogs;