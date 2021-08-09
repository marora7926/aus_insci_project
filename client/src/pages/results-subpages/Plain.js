import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

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
        margin: '0px 20px',
        padding: '5px 10px',
        background: "#B7E4C7",
        color: "black",
        border: '1px solid #333',
        borderRadius: '4px',
    },
    p: {
      margin: '15px 20px',
      color: '#343a40',
    },
    subp: {
        margin: '15px 20px',
        color: '#343a40',
        fontSize: '14px',
        fontStyle: 'italic',
    },
}

const Plain = () => {
    const [showObject, setShowObject] = useState({})
    const handleShowObject = (objectName) => {setShowObject({...showObject, [objectName]: true })};
    const handleCloseObject = (objectName) => {setShowObject({...showObject, [objectName]: false })};

    return (
        <>
            <h3 style={styles.h3}>Plain language summary documents: Australian Data only</h3>
            <hr></hr>
            {
                [{
                    m_title: "Overall results",
                    title: "Results",
                    authors: ["Aus-InSCI Team"],
                    link: "../assets/documents/Results_2018.pdf",
                    version: 1.0,
                    date: "10-07-21",
                    download: "1a_results",
                },{
                    m_title: "Working after spinal cord injury",
                    title: "Working after SCI",
                    authors: ['Sam Borg'], //, 'Tim Geraghty', 'Mohit Arora'
                    link: "../assets/documents/Working_after_SCI.pdf",
                    version: 1.0,
                    date: "10-07-21",
                    download: "2a_results",
                }].map((article, index) => {
                    return (
                        <>
                            <h4 style={styles.h4}>{article.m_title} {article.authors}</h4>
                            <Button style={styles.button} variant="primary" onClick={() => {handleShowObject('show' + index)}}>
                                Access pdf here
                            </Button>
                            <Modal show={showObject['show' + index]} onHide={() => {handleCloseObject('show' + index)}}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{article.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p style={styles.p}><b>Lead author: </b>{article.authors}</p>
                                    <p style={styles.subp}><b>Version: </b>{article.version}, <b>dated: </b>{article.date}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => {handleCloseObject('show' + index)}}>
                                        Close
                                    </Button>
                                    <Button 
                                        style={styles.button}
                                        href={article.link}
                                        download={article.download}
                                        // target="_blank" 
                                        // rel="noopener noreferrer" 
                                        onClick={() => {handleCloseObject('show' + index)}}
                                    >
                                        Access pdf
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <hr></hr>
                        </>
                    )
                })        
            }
        </>
    );
};

export default Plain;