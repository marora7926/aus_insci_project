import React from 'react';
import '../styles/Footer.css'
import Privacy from "../components/assets/documents/Privacy.pdf";
import Disclaimer from "../components/assets/documents/Disclaimer.pdf";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex-container page_contact links">
            <p>
              <a href="mailto:mohitcoder2021@gmail.com" title="email">Email me</a>
              <a href="https://github.com/marora7926" target="_blank" title="Github" rel="noreferrer">GitHub</a>
              <a href="https://twitter.com/marora_ind" target="_blank" title="Twitter" rel="noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/in/mohit-arora-098750122/" target="_blank" title="LinkedIn" rel="noreferrer">LinkedIn</a>
            </p>
      </div>
      <div className="flex-container links">
              <p>© 2021 Mohit Arora | ABN: 00 000 000 000</p>
              <p>
                <a href={Privacy} download="Privacy">Privacy</a>
                <a href={Disclaimer} download="Disclaimer">Disclaimer</a>
              </p>
      </div>
    </footer>
  );
}  
  
  export default Footer;