
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function AppNavBar({ onClick }) {

  return (
    <Navbar expand="lg" className='nav-bar'>
      <Container>
        <Navbar.Brand href="#home" className='logo'>Project Haven</Navbar.Brand>
        <Navbar.Toggle className='menu1' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto links">
            <Nav.Link as={Link} to="/homepage" className='nav-links'>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/search" className='nav-links'>Search</Nav.Link>
            <Nav.Link href="#features" className='nav-links'>Saved</Nav.Link>
            <Nav.Link as={Link} to="/contribute" className='nav-links'>Contribute</Nav.Link>
            <Nav.Link href="#contact" className='nav-links'>Contact us</Nav.Link>

          </Nav>
          <Nav className='ms-auto links'>
          <Nav.Link as={Link} to="/login" onClick={onClick} className='log-in-link'>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavBar