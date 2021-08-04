import React from 'react';
import ausInsciLogo from "../../public/images/logos/Aus-Insci-Logo.png"
// import '../styles/Header.css'  

function Header() {
    return (
      <header className="header">
            <img className="ausInsciLogo" src={ausInsciLogo} alt="ausInsciLogo"></img>
            <h1>Aus-InSCI Community Survey Project</h1>
            <h4>(Australian Arm of the International Spinal Cord Injury Community Survey Project)</h4>
      </header>
    );
  }
  
  export default Header;