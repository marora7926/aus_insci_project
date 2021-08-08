import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import Paper1 from '../../assets/documents/cohort_profile_fekete.pdf';

const styles = {
    h3: {
        margin: '5px 20px',
        color: '#1b4332',
    },
    h4: {
        margin: '10px 20px',
        color: '#1b4332',
    },
    button: {
        margin: '15px 20px',
        // display: 'block',
        // appearance: 'none',
        background: "beige",
        color: "black",
        border: '1px solid #333',
        // textTransform: 'uppercase',
        padding: '10px 20px',
        borderRadius: '4px',
    },
    p: {
      margin: '15px 20px',
      color: '#343a40',
    },
}

const Plain = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <h3 style={styles.h3}>Plain language sumarry documents: Australian Data only</h3>
        <hr></hr>
        <h4 style={styles.h4}>#1 Overall study results</h4>
        <Button style={styles.button} variant="primary" onClick={handleShow}>
        Access full article here
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Employment Descriptive Paper</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button style={styles.button} variant="primary" href="https://www.nature.com/articles/s41393-021-00639-z" target="_blank" onClick={handleClose}>
                Access here
            </Button>
            </Modal.Footer>
        </Modal>
        <h4 style={styles.h4}>#2 Employment status in people with spinal cord injury</h4>
        <Button style={styles.button} variant="primary" onClick={handleShow}>
        Access full article here
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Employment Descriptive Paper</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button style={styles.button} variant="primary" href="https://www.nature.com/articles/s41393-021-00639-z" target="_blank" onClick={handleClose}>
                Access here
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default Plain;

// const Plain = () => {
//     const [modalState, setModalState] = useState("modal-one" | "modal-two" | "close")
    
//     const handleShowModalOne = () => {
//      setModalState("modal-one")
//     }
    
//     const handleShowModalTwo = () => {
//      setModalState("modal-two")
//     }
    
//     const handleClose = () => {
//      setModalState("close")
//     }
    
//     return (
//      <div>
//        <Button onClick={handleShowModalOne}>Show Modal One</Button>
    
//        <Modal show={modalState === "modal-one"}>
//          <Modal.Body>This is Modal One</Modal.Body>
//          <Modal.Footer>
//            <Button onClick={handleShowModalTwo}>Show Modal Two</Button>
//          </Modal.Footer>
//        </Modal>
    
//        <Modal show={modalState === "modal-two"}>
//          <Modal.Body>This is Modal Two</Modal.Body>
//          <Modal.Footer>
//            <Button onClick={handleClose}>Close</Button>
//          </Modal.Footer>
//        </Modal>
//      </div>
//     )
//     }