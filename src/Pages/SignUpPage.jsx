
import supabase from "../client"
import { Link, useNavigate } from "react-router-dom"
import Form from "react-bootstrap/Form"
import SendButton from "../Components/SendButton"
import { useState } from "react"

function SignUpPage() {

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',email: '',password: ''
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
    const { data, error } = await supabase.auth.signUp(
      {
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      }
    )
    if (error) throw error
    alert('Check your email for verification link')
    navigate('/login')

  } catch(error) {
    alert(error)
  }

}
  
  return (
    <div className="auth-form-container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control className="input" type="text" name="fullName" size="lg" placeholder="John Doe" onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control className="input" type="email" name="email" size="lg" placeholder="name@example.com" onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Password</Form.Label>
            <Form.Control className="input" type="password" name="password" size="lg" onChange={handleChange} required/>
        </Form.Group>
        <div className="d-grid">
            <SendButton onClick={handleSubmit} className="contact-btn">Create Account</SendButton>
          </div>
        <p>Already have an account? <span><Link to="/login">Log in</Link></span></p>
      </Form>
    </div>
  )
}

export default SignUpPage