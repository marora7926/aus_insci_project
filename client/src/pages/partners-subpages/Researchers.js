import React from "react";
import { Card, Container, Image } from 'react-bootstrap';
import AvatarM from '../partners-subpages/male-avatar.jpg'
import AvatarF from '../partners-subpages/female-avatar.jpg'

const styles = {
  h3: {
    margin: '15px 20px',
    color: '#6a040f',
  },
  div: {
    display:'flex'
  },
  card: {
    margin: '5px 20px',
    width: '18rem',
    flexWrap: 'wrap',
    border: '2px solid #6a040f',
  },
  header: {
    color: '#6a040f',
    backgroundColor: '#EFD3D7',
    fontSize: '20px',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: '80px',
    border: '1px solid #6a040f',
  },
  text: {
    margin: '25px 5px 2px 10px',
    color: '#343a40',
  },
  a: {
    margin: '10px 5px 2px 10px',
  },
};

export default function Researchers() {
  return (
    <>
      <h3 style={styles.h3}> NSW Team</h3>
      <div style={styles.div}>
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Prof James Middleton</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            James is a Consultant in Rehabilitation Medicine with over 25 years clinical and 
            research experience in the field of spinal cord injury medicine and rehabilitation.
            </Card.Text>
            <a style={styles.a} href="https://www.sydney.edu.au/medicine-health/about/our-people/academic-staff/james-middleton.html" target="_blank">More details</a>
        </Card.Body>
      </Card>
      
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Mohit Arora</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Mohit has Ph.D. in Medicine from The University of Sydney (2013-2017) and has over 15 years clinical and 
            research experience in the field of spinal cord injury.
          </Card.Text>
          <a style={styles.a} href="https://www.sydney.edu.au/medicine-health/about/our-people/academic-staff/mohit-arora.html" target="_blank">More details</a>
        </Card.Body>
      </Card>
      
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Prof Ian Cameron</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Ian is a Consultant Physician in Rehabilitation Medicine and has the Chair in Rehabilitation Medicine, 
            at the University of Sydney. He holds a NHMRC Practitioner Fellowship.
          </Card.Text>
          <a style={styles.a} href="https://www.sydney.edu.au/medicine-health/about/our-people/academic-staff/ian-cameron.html" target="_blank">More details</a>
        </Card.Body>
      </Card>
      
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Prof Ashley Craig</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Ashley is a Professor of Rehabilitation Studies and a Senior Clinical Psychologist in the 
            READ Clinic treating people witg neurological and musculoskeletal injuries.
          </Card.Text>
          <a style={styles.a} href="https://www.sydney.edu.au/medicine-health/about/our-people/academic-staff/a-craig.html" target="_blank">More details</a>
        </Card.Body>
      </Card>
      </div>
      <hr></hr>

      <h3 style={styles.h3}> QLD Team</h3>
      <div style={styles.div}>
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Prof Tim Geraghty</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Detials will be added shortly.
          </Card.Text>
          <a style={styles.a} href="https://www.hopkinscentre.edu.au/people-view/tim-geraghty-39" target="_blank">More details</a>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Ms Samantha Borg</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Detials will be added shortly.
          </Card.Text>
          <a style={styles.a} href="http://www.hopkinscentre.edu.au/people-view/samantha-borg-151" target="_blank">More details</a>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Delena Amsters</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Detials will be added shortly.
          </Card.Text>
          <a style={styles.a} href="http://www.hopkinscentre.edu.au/people-view/delena-amsters-51" target="_blank">More details</a>
        </Card.Body>
      </Card>
      </div>
      <hr></hr>

      <h3 style={styles.h3}> SA Team</h3>
      <div style={styles.div}>
      <Card style={styles.card}>
        <Card.Header style={styles.header}>A/Prof Ruth Marshall</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Detials will be added shortly.
          </Card.Text>
          <a style={styles.a} href="https://www.linkedin.com/in/ruth-marshall-51a56219/?originalSubdomain=au" target="_blank">More details</a>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Jillian Clark</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Detials will be added shortly.
          </Card.Text>
          <a style={styles.a} href="#" target="_blank">More details</a>
        </Card.Body>
      </Card>
      </div>
      <hr></hr>

      <h3 style={styles.h3}> VIC Team</h3>
      <div style={styles.div}>
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Andrew Nunn</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Detials will be added shortly.
          </Card.Text>
          <a style={styles.a} href="https://www.thesri.org/profiles/dr-andrew-nunn/" target="_blank">More details</a>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Prof David Berlowitz</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Detials will be added shortly.
          </Card.Text>
          <a style={styles.a} href="#" target="_blank">More details</a>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Marnie Graco</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Detials will be added shortly.
          </Card.Text>
          <a style={styles.a} href="linkedin.com/in/marnie-graco-9a128a177/?originalSubdomain=au" target="_blank">More details</a>
        </Card.Body>
      </Card>
      </div>
      <hr></hr>
    </>
  );
}