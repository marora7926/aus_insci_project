import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Report from './results-subpages/Report';
import Plain from './results-subpages/Plain';
import Publications from './results-subpages/Publications';

const styles = {
  navbar: {
    height: '40px',
    backgroundColor: '#B7E4C7',
  },
  navLink: {
    color: '#1b4332',
  },
};

const Results = () => {
  console.log('Results and publications');
  return (
    <Router>
      <>
        <Navbar style={styles.navbar} expand='lg'>
          <Container fluid>
            <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar'>
              <Nav>
                  <Nav.Link as={Link} to='/plain' style={styles.navLink}>Plain Language Documents</Nav.Link>
                  <Nav.Link as={Link} to='/report' style={styles.navLink}>National Report</Nav.Link>
                  <Nav.Link as={Link} to='/publications' style={styles.navLink}>Scientific Publications</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path='/report' component={Report} />
          <Route exact path='/plain' component={Plain} />
          <Route exact path='/publications' component={Publications} />
        </Switch>
      </>
    </Router>
  );
};

export default Results;