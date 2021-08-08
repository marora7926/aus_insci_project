import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Researchers from './partners-subpages/Researchers';
import Advisory from './partners-subpages/Advisory';
import Organisations from './partners-subpages/Organisations';

const styles = {
    navbar: {
      height: '40px',
      backgroundColor: '#EFD3D7',
    },
    navLink: {
      color: '#6a040f',
    },
    container: {
        padding: '0px',
    },
};

const Partners = () => {
    return (
        <Router>
            <>
                <Navbar style={styles.navbar} expand='lg'>
                    <Container fluid style={styles.container}>
                        <Navbar.Toggle aria-controls='navbar' />
                        <Navbar.Collapse id='navbar'>
                            <Nav>
                                <Nav.Link as={Link} to='/researchers' style={styles.navLink}>The Research Team</Nav.Link>
                                <Nav.Link as={Link} to='/advisory' style={styles.navLink}>Advisory Committee</Nav.Link>
                                <Nav.Link as={Link} to='/organisations' style={styles.navLink}>Partnering Organisations</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    {/* <Route exact path='/' component={Researchers} /> */}
                    <Route exact path='/researchers' component={Researchers} />
                    <Route exact path='/advisory' component={Advisory} />
                    <Route exact path='/organisations' component={Organisations} />
                </Switch>
            </>
        </Router>
    );
};

export default Partners;