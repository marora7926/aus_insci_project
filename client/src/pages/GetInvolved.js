import React from 'react';
import { Jumbotron, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
    console.log('Reach us');
    return (
        <>
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                    <h1>Reach out to us</h1>
                </Container>
            </Jumbotron>
            <Navbar bg='success' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav>
                            <Nav.Link as={Link} to='/report'>Want to participate?</Nav.Link>
                            <Nav.Link as={Link} to='/plain'>Share your ideas for change</Nav.Link>
                            <Nav.Link as={Link} to='/science'>Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default GetInvolved;