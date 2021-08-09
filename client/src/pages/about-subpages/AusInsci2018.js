import React from 'react';
import { Carousel } from 'react-bootstrap'; 

import ManOnWC from '../assets/man_wc.jpg'
import WCAndBicycle from '../assets/wc_bicycle.jpg'
import WCAndSky from '../assets/wc_sky.jpg'

const styles = {
    img: {
        marginBottom: '25px',
        display: 'block',
        width: 500,
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

const AusInsci2018 = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item interval={2000}>
                    <img 
                    style={styles.img}
                    // className="d-block w-100"
                    src={ManOnWC}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    style={styles.img}
                    // className="d-block w-100"
                    src={WCAndBicycle}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    style={styles.img}
                    // className="d-block w-100"
                    src={WCAndSky}
                    alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <h2 style={styles.h2}>What is the Aus-InSCI 2018 Community Survey?</h2>
            <div>
                <h3 style={styles.h3}>What is the project background?</h3>
                <p style={styles.p}>
                    Australia participated in a world first InSCI survey that aimed to 
                    describe the lived experience of people with spinal cord injury (SCI) in Australia. 
                    There was a need for better information from people with a SCI about the most important 
                    problems and needs that they had across their lifespan. This forms part of a new global 
                    ‘learning systems’ initiative to improve the lived experience of people living with SCI
                    that is linked to implementation of the World Health Organisation (WHO) Global Disability 
                    Action Plan 2014-2021 Better health for all people with disability. Twenty-two WHO member 
                    countries participated, which enabled comparison to be made between these countries including 
                    Australia. The study was affiliated with the World Health Organisation (WHO), the 
                    International Spinal Cord Society (ISCoS) and the International Society of Physical 
                    Rehabilitation Medicine (ISPRM). Ultimately, the goal of this research is to identify 
                    targets for effective interventions at various levels of government policy-making 
                    (in relation to evidence and rights), health and service delivery systems and funding 
                    to assist people with SCI realise their potential, to participate in and contribute to society, 
                    and to have a say in their own future.
                </p>
                <h3 style={styles.h3}>How was the survey undertaken?</h3>
                <p style={styles.p}>
                    The study recruited around 1,579 people with SCI in Australia in 2018-19. 
                    The study was a collaborative project between New South Wales, Queensland, South Australia 
                    and Victoria. Each state involves collaboration between State Spinal Cord Injury units/ services, 
                    not-for-profit member-based SCI associations and Third-Party Insurers/ Lifetime Care and Support 
                    Agencies. Participation in this study included completing a questionnaire. The Australian Central 
                    Coordinating Site for the survey was the John Walsh Centre for Rehabilitation Research based at 
                    the University of Sydney at Sydney, NSW. The Aus-InSCI 2018 Survey was funded by Insurance and 
                    Care NSW (icare NSW). The international coordinating and research centre was Swiss Paraplegic 
                    Research in Nottwil, Switzerland.
                </p>
                <h3 style={styles.h3}>What will the survey inform?</h3>
                <p style={styles.p}>
                    The results from this survey are intended to inform improvements in health and disability/social 
                    support services, government policies, care and support. In addition to providing reliable and 
                    detailed information about the personal lived experience, the survey results will also reveal 
                    best practices and strategies that are working in other countries that we can learn from, explore 
                    for better solutions and adapt to the Australian context. This would provide a baseline for future 
                    comparison within Australia, as well as international benchmarking across level of functioning, 
                    social and economic participation, and social support. The data may also complement future 
                    data collection on performance and outcomes by the National Disability Insurance Authority 
                    and the National Injury Insurance Scheme, as well as other schemes (e.g., for Motor Vehicle 
                    and Workers Compensation).
                </p>
            </div>
        </>
    );
};

export default AusInsci2018;