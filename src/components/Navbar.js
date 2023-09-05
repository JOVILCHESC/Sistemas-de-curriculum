import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import BuscarEmpresaScreen from '../Screens/BuscarEmpresa';
import EmpleadoresScreen from '../Screens/Empleadores';
import InicioScreen from '../Screens/Inicio';

const NavbarComponent = () => {
  return (
    <Router>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{ marginRight: '550px' }}>Empleo Vita</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"} href="#home" style={{ marginRight: '10px' }}>Inicio</Nav.Link>
              <Nav.Link as={Link} to={"/link1"} href="#link1" style={{ marginRight: '10px' }}>Buscar Empresa</Nav.Link>
              <Nav.Link as={Link} to={"/link2"} href="#link2" style={{ marginRight: '10px' }}>Empleadores</Nav.Link>
              <NavDropdown title="Registrate" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Empleador</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Profesional
                </NavDropdown.Item>
                {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />*/}
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div>
    <Routes> {/* Cambia a "Routes" */}
          <Route path="/link1" element={<BuscarEmpresaScreen />} /> {/* Usa "element" */}
          <Route path="/link2" element={<EmpleadoresScreen />} /> {/* Usa "element" */}
          <Route path="/home" element={<InicioScreen />} /> {/* Usa "element" */}
        </Routes>
    </div>
  </Router>
  );
}

export default NavbarComponent;