
import { Link } from 'react-router-dom';
import NavigationBar from "../Components/NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import HeroImg from '.././assets/hero-img.webp'

function HeroSection() {
  return (
    <div className="hero-section">
        <NavigationBar />
        <Container fluid='md' className="hero-container">
            <Row>
                <Col>
                    <h1 className="hero-header">Hundreds of <span className="blue">project topics</span> at <span className="green">your fingertips!</span></h1>
                    <p className="hero-subheading">We make it easier to find project topics by creating a single library that contains all of them.</p>
                    <div className="btn-container">
                        <Link to="/register" className='navigation-link'>
                        <Button className="primary-btn">Get Started</Button>
                        </Link>
                        <Link to="/login" className='navigation-link'>
                        <Button className="secondary-btn">Log in</Button>
                        </Link>
                    </div>
                </Col>

                <Col md={6}>
                    <img src={HeroImg} alt="A photo of a mini library coming out of a phone" className="hero-img"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeroSection