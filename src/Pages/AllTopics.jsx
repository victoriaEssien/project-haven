
import supabase from "../client"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import TopicCard from "../Components/TopicCard"

function AllTopics() {

    let navigate = useNavigate()

    const [topics, setTopics] = useState([])
    const [category, setCategory] = useState("Web Development")

    useEffect(() => {
        const fetchTopics = async () => {
            const { data, error } = await supabase
                .from('topics')
                .select()
                .eq("category", category)

            if (error) {
                navigate('/homepage', {replace: true})
            }

            if (data) {
                setTopics(data)
            }
        }

        fetchTopics()
    }, [category, navigate])

  return (
    <div className="dashboard">
        <section className="topics-body">
            <h4 className="recent">All Topics</h4>
                <div className="filter-container">
                <Form.Select size="lg" name="category" className="input" id="Category" onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select a category</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Networking">Networking</option>
              </Form.Select>
                </div>
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

export default AllTopics