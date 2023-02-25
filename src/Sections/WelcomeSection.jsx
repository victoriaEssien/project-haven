
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import WelcomeImg from "../assets/welcome-img.png"

function WelcomeSection() {
  return (
    <section className="welcome-section" id="about">
        <Row>
            <Col>
                <h6 className="welcome-subheading">Welcome to Project Haven &#128075;</h6>
                <h3 className="welcome-header">We are one of the leading open source project libraries in Nigeria</h3>
                <p className="welcome-text">Project Haven is a web based platform designed to help students find and explore project topics easily. Our library houses an array of project topics from different fields in tech, making it easy to find the perfect project for you.
                <br /> <br />
                With the ability to filter by topic, course and difficulty, you can easily find the project that is best suited for you. With Project Haven, searching for topics no longer have to be a tedious task &#128524;</p>
                <Link to="/coming">
                  <Button className="primary-btn navigation-link">Get Started</Button>
                </Link>
            </Col>

            <Col md={6}>
                    <img src={WelcomeImg} alt="" className="welcome-img"/>
            </Col>
        </Row>
    </section>
  )
}

export default WelcomeSection