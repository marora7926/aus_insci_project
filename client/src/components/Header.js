import React from 'react';
import ausInsciLogo from "../assets/images/logos/Aus-Insci-Logo.png"
// import '../styles/Header.css'  


const styles = {
  header: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    height: '110px',
    border: '2px',
  },
  logo: {
    height: '85px',
    margin: '10px', 
    marginTop: '15px',  
  },
  h2: {
    paddingTop: '15px',
    marginRight: '15px',
    textAlign: 'left',
    color: 'dark',
    fontSize: '2.0rem',
  }
}

function Header() {
    return (
      <>
        <header style={styles.header}>
              <img style={styles.logo} src={ausInsciLogo} alt="ausInsciLogo"></img>
              <div>
              <h2 style={styles.h2}>Aus-InSCI Community Survey Project</h2>
              <h5><i>(Australian Arm of the International Spinal Cord Injury Community Survey Project)</i></h5>
              </div>
        </header>
      </>
    );
  }
  
  export default Header;