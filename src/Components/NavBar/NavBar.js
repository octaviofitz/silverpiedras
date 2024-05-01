import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../IMG/Logo.png';

import './navBar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='Navbar'>
      <Container>
        <img src={logo} alt='Logo Silver Piedras' className='logo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='links'>Nosotros</Nav.Link>
            <Nav.Link href="#link" className='links'>Producto</Nav.Link>
            <Nav.Link href="#link" className='links'>Rubicat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;