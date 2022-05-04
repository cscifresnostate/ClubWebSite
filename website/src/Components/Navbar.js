import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Proj1_path, Proj2_path, About_path, Home_path } from '../Components/constants';
import Icon from '../Util/logo.png';

const NavigationBar = (props) => {


  return (
    <Navbar sticky="top" bg="light" expand='lg'>
      <Container fluid>

        <Navbar.Brand as={Link} to={Home_path}>
          <img
            className='w-auto'
            style={{ height: 30 }}
            src={Icon}
            alt="Icon"
          />
          CSUF Computer Science Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={Home_path}>Home</Nav.Link>

            <NavDropdown title="2022" id="navbarScrollingDropdown">

              <NavDropdown.Item as={Link} to={Proj1_path}>
                Project 1 - Dumb Ways To Doctor
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to={Proj2_path}>
                Project 2 - Fight the Darkness
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link as={Link} to={About_path}>About</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

export default NavigationBar; 