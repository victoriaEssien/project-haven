
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function ComingSoon() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qk2039q', 'template_psc0d2v', form.current, 'Z9ZKs_j2kVSWTOYDg')
      .then((result) => {
        console.log(result.text);
        alert("Thanks for showing interest! We will get back to you shortly")
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, Please try again")
      });
  };

  return (
    <section className="coming-soon-section">
      <p className="back-link">
        <Link to="/" className="back">Back to Home</Link>
      </p>
      <h1 className="coming-soon-header">Relax 😎 We're Coming Soon</h1>
      <p>Enter your email below if you'd like to be one of our first test users!</p>
      
      <div className="beta-container">
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control className="input" type="email" name="email" size="lg" placeholder="name@example.com" required/>
          </Form.Group>
          <div className="d-grid">
            <Button type="submit" className="contact-btn">Send Message</Button>
          </div>
        </Form>
      </div>
      

    </section>
  )
}

export default ComingSoon