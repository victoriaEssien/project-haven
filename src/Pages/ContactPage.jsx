
import { useEffect, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import SendButton from "../Components/SendButton";
import AppNavBar from "../Components/AppNavBar";


function ContactPage() {

  const form = useRef();
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    let timer
    if(formError) {
      timer = setTimeout(() => {
        setFormError(null)
      }, 3000)
    }
    return() => {
      clearTimeout(timer)
    }
  }, [formError])

  const sendEmail = async (e) => {
    e.preventDefault();

    if (document.getElementById("email-field").value === "" ||
        document.getElementById("subject-field").value === "" ||
        document.getElementById("message-field").value === "") {
        setFormError("Please fill in all fields")
    } else {

    await emailjs.sendForm('service_qk2039q', 'template_cwic9u4', form.current, 'Z9ZKs_j2kVSWTOYDg')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent, We will get back to you shortly")
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, Please try again")
      });

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
          <Form ref={form} className="auth-form-container">
            {formError && <p className="error">{formError}</p>}
            <Form.Group className="mb-3" controlId="email-field">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control className="input" type="email" name="email" size="lg" placeholder="name@example.com" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="subject-field">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control className="input" type="text" name="subject" size="lg" placeholder="Just saying hi" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message-field">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control className="input" as="textarea" name="message" rows={3} placeholder="I can't wait to use this!" required/>
            </Form.Group>

              <div className="d-grid">
                  <SendButton onClick={sendEmail}>Send message</SendButton>
                </div>
          </Form>
      </div>
    </div>
  )
}

export default ContactPage