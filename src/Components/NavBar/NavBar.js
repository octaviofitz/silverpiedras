import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../IMG/Logo.webp';

import './navBar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='Navbar'>
      <Container>
        <Nav.Link as={Link} to='/'><img src={logo} alt='Logo Silver Piedras' className='logo' /></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/producto" className='links'>Producto</Nav.Link>
            <Nav.Link as={Link} to="/recomendaciones" className='links'>Recomendaciones</Nav.Link>
            <Nav.Link as={Link} to="https://www.rubicat.com.ar" target='_blank' className='links'>Rubicat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;