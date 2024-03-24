
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover,author,author_img,
        reading_time}=blog;
    return (
        <div>
        <img src={cover} alt={`Cover picture of the title ${title}`} />
        <div className='flex justify-between'>
            <div>
            <img className='w-20' src={author_img} alt="" />
            </div>
            <div>
                <span>{reading_time} min read </span>
            </div>
        </div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Blog.PropTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;