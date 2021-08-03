import React from 'react';
import { Jumbotron, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutAusInsci = () => {
    console.log('Landing page');
    return (
        <>
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                    <h1>About Aus-InSCI Project</h1>
                </Container>
            </Jumbotron>
            <Navbar bg='success' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav>
                            <Nav.Link as={Link} to='/plain'>Aus-InSCI 2018</Nav.Link>
                            <Nav.Link as={Link} to='/science'>Aus-InSCI 2023</Nav.Link>
                            <Nav.Link as={Link} to='/science'>Aus-InSCI Translation Project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default AboutAusInsci;