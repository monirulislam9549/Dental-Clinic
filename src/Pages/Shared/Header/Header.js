import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo teeth.png'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" sticky='top' variant="dark " style={{ height: '75px' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>

                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;