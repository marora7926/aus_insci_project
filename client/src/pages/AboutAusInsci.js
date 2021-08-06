import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AusInsci2018 from './about-subpages/AusInsci2018';
import AusInsci2023 from './about-subpages/AusInsci2023'
import Translation from './about-subpages/Translation';

const styles = {
    navbar: {
      height: '40px',
      backgroundColor: '#cdb4db',
    },
    navLink: {
      color: 'purple',
    },
};

function AboutAusInsci () {
    return (
        <Router>
        <>
            <Navbar style={styles.navbar} expand='lg'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav>
                            <Nav.Link as={Link} to='/ausinsci2018' style={styles.navLink}>Aus-InSCI 2018</Nav.Link>
                            <Nav.Link as={Link} to='/ausinsci2023' style={styles.navLink}>Aus-InSCI 2023</Nav.Link>
                            <Nav.Link as={Link} to='/translation' style={styles.navLink}>Translation Project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path='/' component={AusInsci2018} />
                <Route exact path='/ausinsci2018' component={AusInsci2018} />
                <Route exact path='/ausinsci2023' component={AusInsci2023} />
                <Route exact path='/translation' component={Translation} />
                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
        </>
        </Router>
    );
};

export default AboutAusInsci;