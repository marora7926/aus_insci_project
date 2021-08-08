import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Privacy from "../assets/documents/Privacy.pdf";
import Disclaimer from "../assets/documents/Disclaimer.pdf";
import Ethics from "../assets/documents/Ethics.pdf";
import Acknowledgements from "../assets/documents/Acknowledgements.pdf";

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
    alignItems: 'center',
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
  button: {
    margin: '15px 20px',
    padding: '5px 10px',
    background: "transparent",
    border: '1px solid #333',
    marginTop: '15px',
    fontSize: '14px',
    alignItems: 'center',
    color: '#03045e',
    borderRadius: '4px',
  },
  li: {
    margin: '5px 25px',
    fontSize: '14px',
    color: '#03045e',
  },
}


function Footer() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.flexContainer}>
          <p style={styles.p}>
            <a style={styles.a} href="https://twitter.com/jwcrr1" target="_blank" title="Twitter" rel="noopener noreferrer">Twitter</a>
            <a style={styles.a} href="https://www.facebook.com/" target="_blank" title="LinkedIn" rel="noopener noreferrer">Facebook</a>
            <a style={styles.a} href="https://www.instagram.com/" target="_blank" title="LinkedIn" rel="noopener noreferrer">Instagram</a>
        </p>
        </div>
        <div style={styles.flexContainer}>
          <p style={styles.p}>This website is developed by Mohit Arora, © 2021 </p>
        </div>
        <div style={styles.flexContainer}>
          <p style={styles.p}>
            <Button style={styles.button} variant="primary" onClick={handleShow}>
              Acknowledgements
            </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Acknowledgements and Funders</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={styles.p}><b>ACKNOWLEDGEMENTS:</b>The Aus-InSCI Research team would like to thank team members of 
                  each organisation involved in this study and the Steering Committee members for their time and support. The Aus-InSCI 
                  Research team authors are grateful to Spinal Cord Injuries Australia, Paraplegic and Quadriplegic Association of 
                  New South Wales and The Paraplegic and Quadriplegic Association of South Australia for their commitment 
                  and support for successful completion of the study. The Aus-InSCI Research team also would like to acknowledge 
                  the Swiss Paraplegic Research Centre for advice and ongoing support throughout the study.
                </p>
                
                <p style={styles.p}>This study is based on data from the International Spinal Cord Injury (InSCI) Community Survey, 
                  providing the evidence for the Learning Health System for Spinal Cord Injury (LHS-SCI, see Am J Phys Med Rehabil 
                  2017;96(Suppl):S23–S34). The LHS-SCI is an effort to implement the recommendations described in the WHO report 
                  International Perspectives on Spinal Cord Injury (Bickenbach J et al. Geneva: WHO Press; 2013).
                </p>
                <p style={styles.p}>
                  The members of the InSCI Steering Committee are: James Middleton, Julia Patrick Engkasan, Gerold Stucki, Mirjam Brach, 
                  Jerome Bickenbach, Christine Fekete, Christine Thyrian, Linamara Battistella, Jianan Li, Brigitte Perrouin-Verbe, 
                  Christoph Gutenbrunner, Christina-Anastasia Rapidi, Luh Karunia Wahyuni, Mauro Zampolini, Eiichi Saitoh, Bum-Suk Lee, 
                  Alvydas Juocevicius, Nazirah Hasnan, Abderrazak Hajjioui, Marcel W.M. Post, Anne Catrine Martinsen, Piotr Tederko, 
                  Daiana Popa, Conran Joseph, Mercè Avellanet, Michael Baumberger, Apichana Kovindha, Reuben Escorpizo.
                </p>

                <p style={styles.p}><b>FUNDERS:</b>Each of the sites in four Australian states received funding to undertake this study. 
                  <ol>
                    <li style={styles.li}>The central site in New South Wales based at John Walsh Centre for Rehabilitation Research at the University of 
                        Sydney received funding from Insurance and Care NSW (icare NSW).
                    </li>
                    <li style={styles.li}>The site in Queensland was supported by the Division of Rehabilitation, Princess Alexandra Hospital and 
                      The Hopkins Centre, Griffith University.
                    </li>
                    <li style={styles.li}>The site in Victoria received funding from the Australasian Spinal Cord Injury Network Ltd (SCIN) and Spinal 
                      Research Institute (SRI).
                    </li>
                    <li style={styles.li}>The site in South Australia received funding from Lifetime Support Authority South Australia.
                    </li>
                  </ol>              
                </p>
            </Modal.Body>
            <Modal.Footer>
            <Button style={styles.button} href={Acknowledgements} download="Acknowledgements" onClick={handleClose}>
            Download Acknowledgements and Funders Details Here
            </Button>
            </Modal.Footer>
        </Modal>
            <a style={styles.a} href={Ethics} target="_blank" rel="noopener noreferrer" download="Ethics">Ethics Statement</a>
            <a style={styles.a} href={Privacy} target="_blank" rel="noopener noreferrer" download="Privacy">Privacy</a>
            <a style={styles.a} href={Disclaimer} target="_blank" rel="noopener noreferrer" download="Disclaimer">Disclaimer</a>
          </p>
        </div>
      </footer>
    </>
  );
}  
  
export default Footer;