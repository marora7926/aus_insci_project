import React from 'react';
import { Carousel, Container } from 'react-bootstrap'; 

import ManOnWC from '../assets/man_wc.jpg'
import WCAndBicycle from '../assets/wc_bicycle.jpg'
import WCAndSky from '../assets/wc_sky.jpg'

const styles = {
    container: {
        maxWidth: '600px',
    },
    img: {
        margin: '25px',
        display: 'block',
        width: 600,
    },
    h2: {
        margin: '5px 20px',
        color: 'purple',
    },
    h3: {
        margin: '10px 20px',
        color: 'purple',
    },
    p: {
      margin: '15px 20px',
      color: '#343a40',
    },
    subp: {
        margin: '15px 20px',
        color: '#343a40',
        fontStyle: 'italic',
      },
      ul: {
        margin: '15px 30px',
        color: '#343a40',
      },
}

const Translation = () => {
    return (
        <>
            <Container style={styles.container}>
            <Carousel variant="dark">
                <Carousel.Item interval={2500}>
                    <img 
                    style={styles.img}
                    src={ManOnWC}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                    style={styles.img}
                    src={WCAndBicycle}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                    style={styles.img}
                    src={WCAndSky}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </Container>
            <h2 style={styles.h2}>What is the Aus-InSCI Translation Project?</h2>
            {/* <img style={styles.img} alt="wc_sky"></img> */}
            <div>
                <h3 style={styles.h3}>What is the project Background?</h3>
                <p style={styles.p}>
                InSCI refers to the International Spinal Cord Injury Study which was a 
                community survey conducted with people with SCI in 22 countries across the world. 
                The Australian part of the study is called Aus-InSCI that aimed to describe the 
                lived experience of people with spinal cord injury (SCI) in Australia. In 2018, 
                1579 Australians with SCI completed the Aus-InSCI survey. People in NSW, QLD, Victoria and SA took part.
                The survey asked each person about their function, health and wellbeing.
                    <p style={styles.subp}>
                        <b>Function</b> is the term used to describe how a person does their day-to-day activities. 
                        If a person has a problem with their function, then they can be said to be experiencing disability.
                    </p>
                    <p style={styles.subp}>
                        <b>Health</b> is different to disability. People with a disability might have very good health.
                    </p>
                    <p style={styles.subp}>
                        If a person experiences a feeling of <b>wellbeing</b>, it means that they feel that their lives are 
                        going well. It is influenced by all the things going on in their lives as well as their state 
                        of health and their experience of disability.   
                    </p>
                </p>

                <h3 style={styles.h3}>What is the purpose of the translation project?</h3>
                <p style={styles.p}>
                    The purpose of the translation project is to translate the results of the Aus-InSCI Study into 
                    useful information that can help people with spinal cord injury to live thier best lives.
                    <p style={styles.subp}>
                        <b>Translating</b> is a research term which means using the results of the research to make a 
                        change in the real world. It means that research results don’t just get reported but get 
                        used in a meaningful way. We might translate the Aus-InSCI survey results into changes in: 
                        <ul style={styles.ul}>
                            <li>clinical practice: this refers to the things that health professionals do to help 
                                people with SCI, including educating people with SCI about self-care
                            </li>
                            <li>care and support: this refers to the community services that help people with SCI
                                to live their best lives
                            </li>
                            <li>public policy: this refers to principles and priorities that guide the way health and care systems work.
                            </li>
                        </ul>
                    </p>
                </p>
                <h3 style={styles.h3}>What is the scope of The Project?</h3>
                <p style={styles.p}>
                    Project scope means what will the project cover and what won’t it cover. 
                    If we don’t set The Project scope, it will be much harder to get the project finished on time, 
                    and it might not produce the outcomes we want. The translation project will look at the results 
                    from the Aus-InSCI 2018 survey. It might compare the results of the Australian survey with 
                    results from the surveys in other countries. The project will concentrate on communicating 
                    the descriptive results from this survey. Descriptive results are the simplest summaries 
                    of the findings of the survey, such as total numbers and percentages. If there is complex 
                    statistical analysis of the survey results, we will look to communicate these also.  
                </p>
            </div>
        </>
    );
};

export default Translation;