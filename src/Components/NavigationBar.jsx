
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavigationBar() {

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className='logo'>Project Haven</Navbar.Brand>
        <Navbar.Toggle className='menu' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto links">
            <Nav.Link href="#home" className='nav-links'>Home</Nav.Link>
            <Nav.Link href="#about" className='nav-links'>About</Nav.Link>
            <Nav.Link href="#features" className='nav-links'>Features</Nav.Link>
            <Nav.Link href="#contact" className='nav-links'>Contact</Nav.Link>
          </Nav>
          <Nav className='ms-auto links'>
          <Nav.Link href='/coming' className='log-in-link'>Log in</Nav.Link>
          <Link to="/coming">
          <Button className='get-started-btn'>Get Started</Button>
          </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar