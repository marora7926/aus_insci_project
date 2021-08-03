import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Subscribe from './involved-subpages/Subscribe';
import Feedback from './involved-subpages/Feedback'
import Enquiry from './involved-subpages/Enquiry';

const GetInvolved = () => {
    return (
        <Router>
            <>
                <Navbar bg='info' variant='dark' expand='lg'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls='navbar' />
                        <Navbar.Collapse id='navbar'>
                            <Nav>
                                <Nav.Link as={Link} to='/subscribe'>Subscribe</Nav.Link>
                                <Nav.Link as={Link} to='/feedback'>Feedback Form</Nav.Link>
                                <Nav.Link as={Link} to='/enquiry'>Enquiry Form</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path='/subscribe' component={Subscribe} />
                    <Route exact path='/feedback' component={Feedback} />
                    <Route exact path='/enquiry' component={Enquiry} />
                </Switch>
            </>
        </Router>
    );
};

export default GetInvolved;