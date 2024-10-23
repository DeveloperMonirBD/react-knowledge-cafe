import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-md ml-4 pt-4">
            <div className="text-2xl text-center font-bold">
                <h3>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center">Bookmarks Blogs: {bookmarks.length}</h2>
            {bookmarks.map((bookmark, index) => (
                <Bookmark key={index} bookmark={bookmark} />
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;
