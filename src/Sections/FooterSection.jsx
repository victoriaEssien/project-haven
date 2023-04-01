
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <footer className="footer">
        <Row>
            <Col sm={4}>
                <h4 className="logo-dark">Project Haven</h4>
                <p className="footer-text">We take the legwork out of topic research so you can get more done.</p>
            </Col>

            <Col sm={4}>
                <h4 className="footer-subheader">About</h4>
                <Nav.Link href="#about" className="footer-link">About Project Haven</Nav.Link>
                <Nav.Link href="#features" className="footer-link">Features</Nav.Link>
                <Nav.Link href="#contact" className="footer-link">Contact Us</Nav.Link>
            </Col>

            <Col sm={4}>
                <h4 className="footer-subheader">Follow us</h4>
                <Nav.Link as={Link} to="https://www.instagram.com/projecthaven_/" className="footer-link">Instagram</Nav.Link>
                <Nav.Link className="footer-link">Twitter</Nav.Link>
                <Nav.Link className="footer-link">LinkedIn</Nav.Link>
                <Nav.Link className="footer-link">Facebook</Nav.Link>
            </Col>
        </Row>
        <div className="owner-div">
            <p>Designed and Developed by <Link to="https://twitter.com/code_breaker19" className="helper-link">Victoria Essien</Link></p>
        </div>
    </footer>
  )
}

export default FooterSection