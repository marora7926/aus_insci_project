import React from 'react';
import NatReport from '../assets/Aus-InSCI_National_Report.pdf'

const styles = {
    h2: {
        margin: '5px 20px',
        color: 'green',
    },
    h3: {
        margin: '10px 20px',
        color: 'green',
    },
    p: {
      margin: '15px 20px',
      color: '#343a40',
    },
    a: {
        margin: '20px',
        fontSize: '20px',
    },
}

const Report = () => {
    return (
        <>
        <h2 style={styles.h2}>National Aus-InSCI Report</h2>
        <p>
            <a style={styles.a} 
                href={NatReport}
                target="_blank" 
                title="National Report">
            Access National Report here
            </a>
        </p>
        <div>
        <h3 style={styles.h3}>Summary</h3>
        <p style={styles.p}>
            The Aus-InSCI study uniquely combined data from SCI units in four Australian states, 
            a NSW government insurance agency (icare) and three consumer organisations. A National Steering 
            Committee, as well as a Scientific Advisory Committee, was established to provide project governance 
            along with development of a project management plan and regular monitoring of progress, 
            reporting and evaluation during each stage of the project, including the current ongoing 
            translation phase of Aus-InSCI survey. Relevant national ethical and scientific approvals 
            were attained prior to commencement.
            </p>
            <p style={styles.p}>
            Australia recruited the second largest sample internationally with 1579 participants. 
            NSW recruited 691 participants (44% of responders), with icare NSW comprising 12% of 
            responders in NSW. The cohort was predominantly male (73%) with an average age was 57 years 
            (range 19-94 years). Just over half of the study participants (54%) had post-secondary education. 
            Nevertheless, 40% of participants were in the lowest two categories for household income 
            (less than AUD$35,672). More participants had paraplegia than tetraplegia, with incomplete 
            lesions more common than complete. Compared to overall Aus-InSCI population, icare group had a 
            shorter duration of injury, were somewhat older at time of injury and younger at interview. A detailed 
            analysis is provided. To disseminate these findings, a total of six national publications are 
            presently under development, with another six planned, as well as the Australian team leading 
            five international studies incorporating data from the 22 participating countries and 
            contributing as authors to another 14 international papers.
            </p>
            <p style={styles.p}>
                This project provides the foundation for a novel learning health system for spinal cord injury 
                (LHS-SCI), which is anticipated to usher in a new era of SCI translational research that, 
                at both international and national levels, and across settings from clinical practice, health 
                systems management, state and national policy, will provide a holistic approach to evidence-based 
                implementation in practice and policy to strengthen the societal response to SCI at a national as 
                well as international level.
            </p>
            <p style={styles.p}>
                The Australian InSCI (Aus-InSCI) study represents the largest, most comprehensive survey of 
                health-related issues, functioning, social inclusion, economic participation, environmental factors 
                and quality of life ever conducted in Australia, defining current status and allowing future 
                comparisons. Despite success in recruiting a total of almost 1600 participants in Australia, a 
                variety of barriers and challenges were identified and are discussed in the report.
            </p>
            <p style={styles.p}>
                A number of recommendations have been provided in relation to health and wellbeing, activity 
                and participation, social inclusion and overcoming environmental barriers. Return to work (RTW) 
                or finding new employment after SCI remains a key challenge. Future work should focus on addressing 
                modifiable factors or barriers to employment, including early access to education and training 
                (a key enabler), return to driving programs and transportation, utilising peers as positive role 
                models/mentors, addressing health-related issues, assistance to manage competing life demands and 
                responsibilities, and ongoing monitoring of support systems, once in place. Advocacy for policy 
                changes to permit more work flexibility and supported employment arrangements, such as reduced 
                working hours  with access to income support / welfare or compensation benefits, will help to 
                overcome financial disincentives for RTW related to fear of losing entitlements. Finally, further 
                research to better understand different trajectories, transitions and drivers in RTW, including 
                readiness to RTW, will guide improvements in practice, new programs and interventions.
            </p>
        </div>
        </>
    );
};

export default Report;

