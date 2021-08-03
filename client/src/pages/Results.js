import React from 'react';
import { Jumbotron, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Report from './results-subpages/Report';
import Plain from './results-subpages/Plain'
import Publications from './results-subpages/Publications';

const Results = () => {
  console.log('Results and publications');
  return (
    <Router>
      <>
        {/* <Jumbotron fluid className='text-light bg-dark'>
          <Container>
            <h1>Publications</h1>
          </Container>
        </Jumbotron> */}
        <Navbar bg='success' variant='dark' expand='lg'>
          <Container fluid>
            <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar'>
              <Nav>
                  <Nav.Link as={Link} to='/report'>National Report</Nav.Link>
                  <Nav.Link as={Link} to='/plain'>Plain language documents</Nav.Link>
                  <Nav.Link as={Link} to='/publications'>Scientific publications</Nav.Link>
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