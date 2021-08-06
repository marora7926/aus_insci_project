import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const styles = {
  header: {
    // display: 'inline-block',
    width: '100%',
    height: '105px',
    border: '2px',
    background: '#ade8f4',
  },
  // logo: {
  //   height: '85px',
  //   margin: '10px', 
  //   marginTop: '15px',  
  // },
  h2: {
    paddingTop: '15px',
    marginRight: '15px',
    marginLeft: '20px',
    textAlign: 'left',
    fontSize: '2.0rem',
    color: '#03045e',
  },
  h5: {
    marginLeft: '20px',
    fontStyle: 'italic',
    color: '#03045e',
  },
}

function Header() {
    return (
      <>
        <header style={styles.header}>
              {/* <img style={styles.logo} src={ausInsciLogo} alt="ausInsciLogo"></img> */}
              <div>
          <Navbar.Brand style={styles.h2} as={Link} to='/'>Aus-InSCI Community Survey Project</Navbar.Brand>
          <h5 style={styles.h5}>(Australian Arm of the International Spinal Cord Injury Community Survey Project)</h5>
        </div>
      </header>
    </>
  );
}

export default Header;