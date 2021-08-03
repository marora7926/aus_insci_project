import React from 'react';
import { Jumbotron, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Results = () => {
  console.log('Results and publications');
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Publications</h1>
        </Container>
      </Jumbotron>
      <Navbar bg='success' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav>
                <Nav.Link as={Link} to='/report'>National Report</Nav.Link>
                <Nav.Link as={Link} to='/plain'>Plain language documents</Nav.Link>
                <Nav.Link as={Link} to='/science'>Scientific publications</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default Results;