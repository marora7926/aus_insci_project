import React from 'react';
import { Container } from 'react-bootstrap';
// import HTML from "./assets/AustraliaData.html"

const styles = {
    h2: {
        margin: '5px 20px',
        color: '#1b4332',
    },
    a: {
        margin: '20px',
        padding: '10px',
        fontSize: '20px',
    },
}

const HtmlData = () => {
    return (
        <>
        <h2 style={styles.h2}>National Aus-InSCI Report</h2>
        <hr></hr>
            <Container>
            <a style={styles.a} 
                href="/AustraliaData.html"
                target="_blank">
              Access results here
            </a>
            </Container>
        </>
    );
};

export default HtmlData;