import React from 'react';
import { Jumbotron, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Partners = () => {
    console.log('Research Partners');
    return (
        <>
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                    <h1>Project Team</h1>
                </Container>
            </Jumbotron>
            <Navbar bg='success' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav>
                            <Nav.Link as={Link} to='/report'>The Researchers</Nav.Link>
                            <Nav.Link as={Link} to='/plain'>Advisory Committee</Nav.Link>
                            <Nav.Link as={Link} to='/science'>Scientific publications</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Partners;