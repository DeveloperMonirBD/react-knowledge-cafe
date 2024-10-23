import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

    return (
        <>
            <Header />
            <div className="md:flex max-w-7xl mx-auto p-2">
                <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
                <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
            </div>
        </>
    );
}

export default App;
