

import supabase from "../client"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Form from "react-bootstrap/Form"
import SendButton from "../Components/SendButton"

function LoginPage({setToken}) {

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',password: ''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {

      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      
      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/homepage')
  
    } catch(error) {
      alert(error)
    }
  
  }

  return (
    <div className="auth-form-container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control className="input" type="email" name="email" size="lg" placeholder="name@example.com" onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control className="input" type="password" name="password" size="lg" onChange={handleChange} required/>
        </Form.Group>
        <div className="d-grid">
            <SendButton onClick={handleSubmit} className="contact-btn">Log in</SendButton>
          </div>
        <p>Already have an account? <span><Link to="/register">Register</Link></span></p>
      </Form>
    </div>
  )
}

export default LoginPage