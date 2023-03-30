

import { useEffect, useState } from "react";
import AppNavBar from "../Components/AppNavBar"
import TopicCard from "../Components/TopicCard";

function SavedTopicsPage() {

  const [bookmarkedData, setBookmarkedData] = useState([])

  useEffect(() => {
    const bookmarkedDataFromStorage = localStorage.getItem("bookmarkedData");
    if (bookmarkedDataFromStorage) {
      setBookmarkedData(JSON.parse(bookmarkedDataFromStorage));
    }
  }, []);

  function handleLogOut() {
    sessionStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
        <AppNavBar onClick={handleLogOut}/>
      <div className="dashboard">
      <section className="topics-body">
        <div className="topics-container">
            <h3 className='recent'>Saved Topics</h3>
        </div>
          {bookmarkedData && (
            <div className='topics'>
              <div className='topics-grid'>
                {bookmarkedData.map(topic => (
                  <TopicCard key={topic.id} topic={topic}/>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default SavedTopicsPage