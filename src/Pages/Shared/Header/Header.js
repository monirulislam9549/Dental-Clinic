import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo teeth.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="dark" sticky='top' variant="dark " style={{ height: '75px' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blog</Nav.Link>

                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;