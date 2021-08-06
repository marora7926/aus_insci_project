import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

import SignUpForm from './RegistrationForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';


const styles = {
  marquee: {
      width: '100%',
      direction: 'left',
      height: '40px',
      backgroundColor: "#ade8f4", 
  },
  ul: {
    color: "#black",
    display: 'inline-flex',
    paddingBottom: '0px !important',
    marginBottom: '0px',
  },
  li: {
    marginLeft: '120px',
    listStyleType: 'none',
    font: '30px',
  },
  navbar: {
    height: '45px',
    backgroundColor: '#2b2d42',
  },
  navLink: {
    color: 'white',
  },
};

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <hr></hr> */}
      <Marquee style={styles.marquee}>
        <ul style={styles.ul}>
          <li style={styles.li}>The next Aus-InSCI Survey will be rolled out in January 2023.</li>
          <li style={styles.li}>For viewing Australian results in details, please Login or Register.</li>
          <li style={styles.li}>New: Lay summary for the employment paper has been added under results.</li>
        </ul>
      </Marquee>
      <Navbar style={styles.navbar} expand='lg'>
        <Container fluid>
          {/* <Navbar.Brand as={Link} to='/'>Aus-InSCI Project</Navbar.Brand> */}
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
          {/* <Nav className='ml-auto'> */}
            <Nav style={styles.navLink}>
              <Nav.Link as={Link} to='/' style={styles.navLink}>About Aus-InSCI</Nav.Link>
              <Nav.Link as={Link} to='/partners' style={styles.navLink}>Research Partners</Nav.Link>
              <Nav.Link as={Link} to='/results' style={styles.navLink}>Results</Nav.Link>
              <Nav.Link as={Link} to='/involved'style={styles.navLink}>Get Involved</Nav.Link>
              <Nav.Link as={Link} to='/search'style={styles.navLink}>Search Literature</Nav.Link>
              {/* <Nav.Link as={Link} to='/htmldata' style={styles.navLink}>Australian Data</Nav.Link> */}
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved' style={styles.navLink}>Saved documents</Nav.Link>
                  <Nav.Link onClick={Auth.logout} style={styles.navLink}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)} style={styles.navLink}>Login/Register</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Register</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;