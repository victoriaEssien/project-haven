

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
        <Form.Control type="text" className="input" value={query} onChange={handleChange} placeholder="Search..."/>
        <section>
          {topics && (
            <div>
            {/* order by buttons */}
              <div>
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