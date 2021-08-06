import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Subscribe from './involved-subpages/Subscribe';
import Feedback from './involved-subpages/Feedback'
import Enquiry from './involved-subpages/Enquiry';

const styles = {
    navbar: {
      height: '40px',
      backgroundColor: '#ffccd5',
    },
    navLink: {
      color: '#800f2f',

    },
};

const GetInvolved = () => {
    return (
        <Router>
            <>
                <Navbar style={styles.navbar} expand='lg'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls='navbar' />
                        <Navbar.Collapse id='navbar'>
                            <Nav>
                                <Nav.Link as={Link} to='/subscribe' style={styles.navLink}>Subscribe</Nav.Link>
                                <Nav.Link as={Link} to='/feedback' style={styles.navLink}>Feedback Form</Nav.Link>
                                <Nav.Link as={Link} to='/enquiry' style={styles.navLink}>Enquiry Form</Nav.Link>
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