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
        margin: '0px 50px',
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

const Publications = () => {
    const [showObject, setShowObject] = useState({})
    const handleShowObject = (objectName) => {setShowObject({...showObject, [objectName]: true })};
    const handleCloseObject = (objectName) => {setShowObject({...showObject, [objectName]: false })};

    return (
        <>
            <h3 style={styles.h3}>Published articles: Australian Data only</h3>
            <hr></hr>
            {
                [{
                    id: 1,
                    m_title: "Employment after spinal cord injury",
                    title: "Employment outcomes following spinal cord injury: a population-based cross-sectional study in Australia",
                    authors: "Sam Borg",
                    citation: "Borg SJ, Geraghty T, Arora M, Foster M, Marshall R, Nunn A, Middleton JW. Employment outcomes following spinal cord injury: a population-based cross-sectional study in Australia. Spinal Cord. 2021 May 17. doi: 10.1038/s41393-021-00639-z. Epub ahead of print. PMID: 34002015.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/34002015/",
                },{
                    id: 2,
                    m_title: "Health conditions after spinal cord injury",
                    title: "Health conditions after SCI",
                    authors: "Mohit Arora",
                    citation: "Place holder",
                    link: "https://pubmed.ncbi.nlm.nih.gov/",
                },{
                    id: 3,
                    m_title: "Activity and participation after spinal cord injury",
                    title: "Activity, participation and SCI",
                    authors: "Mohit Arora",
                    citation: "Place holder",
                    link: "https://pubmed.ncbi.nlm.nih.gov/",
                },{
                    id: 4,
                    m_title: "Physical activity after spinal cord injury",
                    title: "Physical activity after SCI",
                    authors: "Mohit Arora",
                    citation: "Place holder",
                    link: "https://pubmed.ncbi.nlm.nih.gov/",
                }].map((article, index) => {
                    return (
                        <>
                            <h4 style={styles.h4}>{article.id}. {article.m_title} <i>(Lead author: {article.authors} et al)</i></h4>
                            <Button style={styles.button} variant="primary" onClick={() => {handleShowObject('show' + index)}}>
                                Access full article here
                            </Button>
                            <Modal show={showObject['show' + index]} onHide={() => {handleCloseObject('show' + index)}}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{article.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p style={styles.p}><b>Lead author: </b>{article.authors}</p>
                                    <p style={styles.subp}><b>Cite: </b>{article.citation}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={() => {handleCloseObject('show' + index)}}>
                                    Close
                                </Button>
                                <Button 
                                    style={styles.button} 
                                    variant="primary" 
                                    href={article.link} 
                                    target="_blank" 
                                    onClick={() => {handleCloseObject('show' + index)}}
                                >
                                    Access here
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

export default Publications;