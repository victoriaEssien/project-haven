
import supabase from '../client';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AppNavBar from '../Components/AppNavBar';
import TopicCard from '../Components/TopicCard';;

function HomePage({ token }) {
  let navigate = useNavigate()

  const [fetchError, setFetchError] = useState(null)
  const [topics, setTopics] = useState(null)

  useEffect(() => {
    const fetchTopics = async () => {
      const { data, error } = await supabase
        .from('topics')
        .select()
        .limit(10)
        .order('created_at', { ascending: false })

      if (error) {
        setFetchError("Could not find any topics")
        setTopics(null)
        console.log(error)
      }

      if (data) {
        setTopics(data)
        setFetchError(null)
      }

    }

    fetchTopics()

  }, [])

  function handleLogOut() {
    sessionStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className='dash-body-whole'>
      <AppNavBar onClick={handleLogOut}/>
      <div className="dashboard">
        <h6 className="user-name">Welcome, {token.user.user_metadata.full_name} 👋🏼</h6>
        <h1 className="dash-header">Your Dashboard</h1>
        <section className="topics-body">
        <div className="topics-container">
          <div className="dash-headings">
            <h3 className='recent'>Recently Added</h3>
            <Link className='div-link' to={'/all'}>See all topics</Link>
          </div>
        </div>
          {fetchError && (<p>{fetchError}</p>)}
          {topics && (
            <div className='topics'>
              <div className='topics-grid'>
                {topics.map(topic => (
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

export default HomePage