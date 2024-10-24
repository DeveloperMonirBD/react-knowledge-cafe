import PropTypes from 'prop-types';
import { MdCollectionsBookmark } from 'react-icons/md';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover, author_img, author, reading_time, posted_date, hashtags } = blog;

    return (
        <div className=" mb-10 mt-6 space-y-4">
            <img className="w-full mb-8 rounded-md" src={cover} alt={`Cover picture of the title ${title}`} />

            <div className="flex justify-between mb-4 ">
                <div className="flex gap-4">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl font-semibold">{author}</h3>
                        <p className="text-gray-500">{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-green-700">
                        <MdCollectionsBookmark />
                    </button>
                </div>
            </div>

            <h2 className="text-4xl font-semibold">{title}</h2>
            <p>
                {hashtags.map((hash, index) => (
                    <span key={index}>
                        <a href="#">#{hash}</a>
                    </span>
                ))}
            </p>
            <button onClick={() => handleMarkAsRead(id,reading_time)} className="text-purple-800 font-bold underline">
                Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blog;
