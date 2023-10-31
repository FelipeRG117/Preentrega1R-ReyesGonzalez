import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carwidget from '../CarWidget/Carwidget';
import './ComponentNavbar.css';

function BasicExample() {


  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container className='Container'>
        <Navbar.Brand href="#home">The MagicBread</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Comida</Nav.Link>
            <Nav.Link href="#link">Complementos</Nav.Link>
            <NavDropdown title="Opciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aderezos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Panes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebidas</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Carwidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;