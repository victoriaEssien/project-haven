
import { useRef } from "react";
import emailjs from 'emailjs-com';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ContactSection() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qk2039q', 'template_cwic9u4', form.current, 'Z9ZKs_j2kVSWTOYDg')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent, We will get back to you shortly")
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, Please try again")
      });
  };

  return (
    <section className="contact-section" id="contact">
        <Row>
          <Col>
            <h3 className="reasons-subheading">Reach out to us</h3>
            <p className="reasons-text">Whether you want to make a suggestion, give us feedback, request to contribute or just want to say hi. Fill in the form and we'll be in touch with you.</p>
          </Col>

          <Col md={6}>
            <div className="form-container">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control className="input" type="email" name="email" size="lg" placeholder="name@example.com" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control className="input" type="text" name="subject" size="lg" placeholder="Just saying hi" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control className="input" as="textarea" name="message" rows={3} placeholder="Woah, I can't wait to use this!" required/>
                </Form.Group>
                <div className="d-grid">
                  <Button type="submit" className="contact-btn">Send Message</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
    </section>
  )
}

export default ContactSection