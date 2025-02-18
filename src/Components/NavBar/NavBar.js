import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../IMG/Varios/Logo.webp';

import './navBar.css';

function BasicExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (event) => {
    if (event.target.tagName === 'IMG') {
      // Si el evento fue disparado por el logo, no hacer nada
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='Navbar' expanded={isOpen}>
      <Container>
        <Nav.Link as={Link} to='/' onClick={toggleNavbar}>
          <img src={logo} alt='Logo Silver Piedras' className='logo' id='logo' />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/bentonita" className='links' onClick={toggleNavbar}>Bentonita</Nav.Link>
            <Nav.Link as={Link} to="/diatomita" className='links' onClick={toggleNavbar}>Diatomita</Nav.Link>
            <Nav.Link as={Link} to="/recomendaciones" className='links' onClick={toggleNavbar}>Recomendaciones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
