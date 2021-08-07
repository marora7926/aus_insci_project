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
    margin: '15px 20px',
    color: '#343a40',
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
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Mohit Arora</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Prof Ian Cameron</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card style={styles.card}>
        <Card.Header style={styles.header}>Prof Ashley Craig</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
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
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Ms Samantha Borg</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Delena Amsters</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
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
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Jillian Clark</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
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
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Prof David Berlowitz</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarM } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
        <Card.Header style={styles.header}>Dr Marnie Graco</Card.Header>
        <Card.Body style={styles.cardBody}>
            <Container>
                <Image style={styles.image} src={ AvatarF } roundedCircle />
            </Container>
          <Card.Text style={styles.text}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <hr></hr>
    </>
  );
}