import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Blog = ({blog,handleAddBookmark}) => {
    const {title,cover,author,author_img,posted_date,
        reading_time,hashtags}=blog;
    return (
        <div>
        <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
        <div className='flex justify-between'>
            <div className='flex'>
            <img className='w-20' src={author_img} alt="" />
            <div className=''>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
            </div>
            </div>
            <div>
                <span>{reading_time} min read </span>
                <button onClick={()=>handleAddBookmark(blog)} 
                 className="ml-4 text-red-500 text-2xl">
                <FaRegBookmark></FaRegBookmark>
                </button>
            </div>
        </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hastag,idx)=> <span key={idx}><a href="">#{hastag}</a> </span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes ={
    blog: PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func
}

export default Blog;