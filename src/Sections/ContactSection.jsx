
import { useEffect, useState, useRef } from "react";
import emailjs from 'emailjs-com';
import Alert from "../Components/Alert";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import SendButton from "../Components/SendButton";


function ContactSection() {

  const form = useRef();
  const [formError, setFormError] = useState(null)
  const [formSuccess, setFormSuccess] = useState(null)

  useEffect(() => {
    let timer
    if(formError || formSuccess) {
      timer = setTimeout(() => {
        setFormError(null)
        setFormSuccess(null)
      }, 3000)
    }
    return() => {
      clearTimeout(timer)
    }
  }, [formError, formSuccess])

  const sendEmail = async (e) => {
    e.preventDefault();

    if (document.getElementById("email-input").value === "" ||
    document.getElementById("subject-input").value === "" ||
    document.getElementById("message-input").value === "") {
    setFormError("Please fill in all fields before submitting")
    } else {

    await emailjs.sendForm('service_qk2039q', 'template_cwic9u4', form.current, 'Z9ZKs_j2kVSWTOYDg')
      .then((result) => {
        console.log(result.text);
        setFormSuccess("Message Sent!, We will get back to you shortly")
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, Please try again")
      });

}
    
  };

  return (
    <section className="contact-section" id="contact">
        <Row className="reasons-row">
          <Col className="reasons-col">
            <h3 className="reasons-subheading">Reach out to us</h3>
            <p className="reasons-text">Whether you want to make a suggestion, give us feedback, request to contribute or just want to say hi. Fill in the form and we'll be in touch with you.</p>
          </Col>

          <Col md={6}>
            {formSuccess && <Alert message={formSuccess}/>}
            <div className="form-container">
              <Form ref={form}>
                {formError && <p className="error">{formError}</p>}
                <Form.Group className="mb-3" controlId="email-input">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control className="input" type="email" name="email" size="lg" placeholder="name@example.com" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="subject-input">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control className="input" type="text" name="subject" size="lg" placeholder="Just saying hi" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="message-input">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control className="input" as="textarea" name="message" rows={3} placeholder="I can't wait to use this!" required/>
                </Form.Group>
                <div className="d-grid">
                  <SendButton onClick={sendEmail}>Submit</SendButton>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
    </section>
  )
}

export default ContactSection