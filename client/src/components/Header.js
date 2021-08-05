import React from 'react';
// import ausInsciLogo from "../assets/images/logos/Aus-Insci-Logo.png"
// import '../styles/Header.css'  


const styles = {
  header: {
    // display: 'inline-flex',
    // justifyContent: 'space-between',
    height: '105px',
    border: '2px',
    background: '#dcf6fd',
  },
  logo: {
    height: '85px',
    margin: '10px', 
    marginTop: '15px',  
  },
  h2: {
    paddingTop: '15px',
    marginRight: '15px',
    marginLeft: '15px',
    textAlign: 'left',
    color: 'dark',
    fontSize: '2.0rem',
    color: 'blue',
  },
  h5: {
    marginLeft: '15px',
    fontStyle: 'italic',
  },
}

function Header() {
    return (
      <>
        <header style={styles.header}>
              {/* <img style={styles.logo} src={ausInsciLogo} alt="ausInsciLogo"></img> */}
              <div>
              <h2 style={styles.h2}>Aus-InSCI Community Survey Project</h2>
              <h5 style={styles.h5}>(Australian Arm of the International Spinal Cord Injury Community Survey Project)</h5>
              </div>
        </header>
      </>
    );
  }
  
  export default Header;