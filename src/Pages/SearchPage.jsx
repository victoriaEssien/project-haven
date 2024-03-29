

import supabase from "../client"
import { useState } from "react"
import AppNavBar from "../Components/AppNavBar"
import Form from "react-bootstrap/Form"
import TopicCard from "../Components/TopicCard"


function SearchPage() {

    const [query, setQuery] = useState("");
    const [topics, setTopics] = useState([])

    const handleChange = async (e) => {
        const value = e.target.value
        setQuery(value)
        const { data, error } = await supabase
            .from("topics")
            .select()
            .textSearch("title", `${value}`)
            
        if (error) {
            console.log(error)

        }

        if (data) {
            setTopics(data)
        }
    }

    function handleLogOut() {
        sessionStorage.removeItem('token')
        navigate('/login')
      }

  return (
    <div>
        <AppNavBar onClick={handleLogOut}/>
        <div className="search-div">
          <Form.Control type="text" size="lg" className="search-field" value={query} onChange={handleChange} placeholder="Search by topic name..."/>
        </div>
        <section className="search-body">
          {topics && (
            <div className="topics">
              <div className="topics-grid">
                {topics.map(topic => (
                  <TopicCard key={topic.id} topic={topic}/>
                ))}
              </div>
            </div>
          )}
      </section>
    </div>
  )
}

export default SearchPage