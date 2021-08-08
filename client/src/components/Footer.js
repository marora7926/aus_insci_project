import React from 'react';
// import '../styles/Footer.css'
import Privacy from "../assets/documents/Privacy.pdf";
import Disclaimer from "../assets/documents/Disclaimer.pdf";
import Enquiry from '../pages/involved-subpages/Enquiry';

const styles = {
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '45px',
    background: '#ade8f4',
  },
  p: {
    marginTop: '15px',
    fontSize: '14px',
    alignTtems: 'center',
    color: '#03045e',
  },
  a: {
    padding: '0 12px',
    fontSize: '14px',
    color: '#03045e',
  },
  flexContainer: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: '0px',
    fontSize: '1em',
    listStyleType: 'none',
    marginTop: '5px',
    marginLeft: '15px',
    marginBottom: '5px',
  },
}


function Footer() {
  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.flexContainer}>
          <p style={styles.p}>
            <a style={styles.a} href="https://twitter.com/jwcrr1" target="_blank" title="Twitter" rel="noreferrer">Twitter</a>
            <a style={styles.a} href="https://www.facebook.com/" target="_blank" title="LinkedIn" rel="noreferrer">Facebook</a>
            <a style={styles.a} href="https://www.instagram.com/" target="_blank" title="LinkedIn" rel="noreferrer">Instagram</a>
        </p>
        </div>
        <div style={styles.flexContainer}>
          <p style={styles.p}>This website is developed by Mohit Arora, © 2021 </p>
        </div>
        <div style={styles.flexContainer}>
          <p style={styles.p}>
            <a style={styles.a} href={Enquiry}>Contact us</a>
            <a style={styles.a} href={Privacy} download="Acknowledgements">Acknowledgements</a>
            <a style={styles.a} href={Privacy} download="Privacy">Privacy</a>
            <a style={styles.a} href={Disclaimer} download="Disclaimer">Disclaimer</a>
          </p>
        </div>
      </footer>
    </>
  );
}  
  
export default Footer;