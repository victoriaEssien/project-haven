

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
    const [formError, setFormError] = useState(null)
    const [wordCount, setWordCount] = useState(0);

    
    useEffect(() => {
      if (description.length > 0 && description.split(' ').length >= 20) {
        setWordCount(description.split(' ').length);
      }

      let timer
      if(formError) {
        timer = setTimeout(() => {
          setFormError(null)
        }, 3000)
      }
      return() => {
        clearTimeout(timer)
      }
    }, [formError, description])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!title || !description || !category) {
            setFormError("Please fill all fields correctly")
            return
        }

        if (wordCount < 20) {
          setFormError("Project description is too short")
          return
        }

        const { data, error } = await supabase
            .from("topics")
            .insert([{title, description, category, status: "Pending"}])
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
        <div className="auth-form-container">
          <Form onSubmit={handleSubmit}>
            {formError && <p className="error">{formError}</p>}
            <Form.Group className="mb-3">
                <Form.Label>Project Title</Form.Label>
                <Form.Control className="input" type="text" value={title} size="lg" placeholder="ex. Hospital Management System" onChange={(e) => setTitle(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Project Description (minimum 20 words)</Form.Label>
                <Form.Control className="input" as="textarea" rows={3} type="text" value={description} size="lg" placeholder="Tell us what your project is about and what it does" onChange={(e) => setDescription(e.target.value)} required/>
            </Form.Group>

              <Form.Select size="lg" name="category" className="input" id="Category" onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select a category</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Networking">Networking</option>
              </Form.Select>

              <div className="d-grid">
                  <SendButton>Submit</SendButton>
                </div>
          </Form>
      </div>
    </div>
  )
}

export default ContributePage