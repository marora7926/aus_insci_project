import React from 'react';
import { Jumbotron, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Participate from './involved-subpages/Participate';
import Ideas from './involved-subpages/Ideas'
import Contact from './involved-subpages/Contact';

const GetInvolved = () => {
    return (
        <Router>
            <>
                {/* <Jumbotron fluid className='text-light bg-dark'>
                    <Container>
                        <h1>Reach out to us</h1>
                    </Container>
                </Jumbotron> */}
                <Navbar bg='info' variant='dark' expand='lg'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls='navbar' />
                        <Navbar.Collapse id='navbar'>
                            <Nav>
                                <Nav.Link as={Link} to='/participate'>Want to participate?</Nav.Link>
                                <Nav.Link as={Link} to='/ideas'>Share your ideas</Nav.Link>
                                <Nav.Link as={Link} to='/contact'>Contact us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Participate} />
                    <Route exact path='/participate' component={Participate} />
                    <Route exact path='/ideas' component={Ideas} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </>
        </Router>
    );
};

export default GetInvolved;