

import supabase from "../client";
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import AppNavBar from "../Components/AppNavBar";
import Form from "react-bootstrap/Form"
import SendButton from "../Components/SendButton"

function ContributePage() {

    let navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [formError, setFormError] = useState(null)
    const [wordCount, setWordCount] = useState(0);

    
    useEffect(() => {
      if (description.length > 0 && description.split(' ').length >= 100) {
        setWordCount(description.split(' ').length);
      }
    }, [description]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!title || !description || !category || !difficulty || wordCount < 50) {
            setFormError("Please fill all fields correctly")
            return
        }

        const { data, error } = await supabase
            .from("contributions")
            .insert([{title, description, category, difficulty}])
            .select()
            setTitle("")
            setDescription("")
            e.target.reset()
            
        if (error) {
            console.log(error);
            setFormError("Please fill all fields correctly")
        }

        if (data) {
            console.log(data);
            setFormError(null)
            navigate("/homepage")
        }
    }

    function handleLogOut() {
        sessionStorage.removeItem('token')
        navigate('/login')
    }

  return (
    <div>
        <AppNavBar onClick={handleLogOut}/>
        <div>
          <Form onSubmit={handleSubmit} className="auth-form-container">
            <Form.Group className="mb-3">
                <Form.Label>Project Title</Form.Label>
                <Form.Control className="input" type="text" value={title} size="lg" placeholder="ex. Hospital Management System" onChange={(e) => setTitle(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Project Description</Form.Label>
                <Form.Control className="input" as="textarea" rows={3} type="text" value={description} size="lg" placeholder="A hospital management system to manage clinic records" onChange={(e) => setDescription(e.target.value)} required/>
            </Form.Group>

              <Form.Select size="lg" name="category" className="input" id="Category" onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select a category</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Networking">Networking</option>
              </Form.Select>

              <Form.Select size="lg" name="difficulty" className="input" id="difficulty" onChange={(e) => setDifficulty(e.target.value)} required>
              <option value="">Select difficulty level</option>
                <option value="Easy">Easy</option>
                <option value="Hard">Hard</option>
                <option value="Difficult">Difficult</option>
              </Form.Select>
              <div className="d-grid">
                  <SendButton>Submit</SendButton>
                </div>

              {formError && <p>{formError}</p>}
          </Form>
      </div>
    </div>
  )
}

export default ContributePage