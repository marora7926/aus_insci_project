import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Researchers from './partners-subpages/Researchers';
import Advisory from './partners-subpages/advisory';
import Organisations from './partners-subpages/Organisations';

const Partners = () => {
    return (
        <Router>
            <>
                <Navbar bg='dark' variant='dark' expand='lg'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls='navbar' />
                        <Navbar.Collapse id='navbar'>
                            <Nav>
                                <Nav.Link as={Link} to='/researchers'>The Researchers</Nav.Link>
                                <Nav.Link as={Link} to='/advisory'>Advisory Committee</Nav.Link>
                                <Nav.Link as={Link} to='/organisations'>Partnering Organisations</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Researchers} />
                    <Route exact path='/researchers' component={Researchers} />
                    <Route exact path='/advisory' component={Advisory} />
                    <Route exact path='/organisations' component={Organisations} />
                </Switch>
            </>
        </Router>
    );
};

export default Partners;