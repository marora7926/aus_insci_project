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
}

const AusInsci2023 = () => {
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
            <h2 style={styles.h2}>What is the Aus-InSCI 2023 Community Survey?</h2>
            {/* <img style={styles.img} alt="wc_bicycle"></img> */}
            <div>
                <h3 style={styles.h3}>What is the project background?</h3>
                <p style={styles.p}>
                    Aus-InSCI 2023 will be based on the previous Aus-InSCI Community Survey which was undertaken 
                    in 2018. The second survey will aim to describe the lived experience of people with spinal 
                    cord injury (SCI) in Australia. The availability of logitudinal data enable comparisons within 
                    particpants as well as policty change within Australian states. The study will be a collaborative 
                    project with the World Health Organisation (WHO), the International Spinal Cord Society (ISCoS) 
                    and the International Society of Physical Rehabilitation Medicine (ISPRM). Ultimately, the goal of 
                    the second survey is to further expand on the current understanding of the lived expereicne as well
                    as to identify targets for effective interventions at various levels of government policy-making 
                    (in relation to evidence and rights), health and service delivery systems and funding 
                    to assist people with SCI realise their potential, to participate in and contribute to society, 
                    and to have a say in their own future.
                </p>
                <h3 style={styles.h3}>How will the survey be undertaken?</h3>
                <p style={styles.p}>
                    The study recruited will recruit from various states of Australia. It is intended in 2023-24. The survey 
                    questionnaires willbe sent to all potential participants by their respective data custodians. Data custodians
                    State Spinal Cord Injury units/ services, not-for-profit member-based SCI associations and Third-Party Insurers/ Lifetime Care and Support 
                    Agencies in each Australian States. John Walsh Centre for Rehabilitation Research based at 
                    the University of Sydney at Sydney, NSW will be the Coordinating Site for the survey.
                </p>
                <h3 style={styles.h3}>What the survey will inform?</h3>
                <p style={styles.p}>
                    The results from this survey are intended to inform improvements in health and disability/social 
                    support services, government policies, care and support. In addition to providing reliable and 
                    detailed information about the personal lived experience, the survey results will also reveal 
                    best practices and strategies that are working in other countries that we can learn from, explore 
                    for better solutions and adapt to the Australian context. This would provide a baseline for future 
                    comparison within Australia, as well as international benchmarking across level of functioning, 
                    social and economic participation, and social support.
                </p>
            </div>
        </>
    );
};

export default AusInsci2023;