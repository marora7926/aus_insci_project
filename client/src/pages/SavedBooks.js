import React, { useState, useEffect } from 'react';
import { Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';

import { removeBookId } from '../utils/localStorage';

import { useMutation, useQuery } from '@apollo/client';
import { REMOVE_BOOK } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const styles = {
  h2: {
    textAlign: 'center',
    padding: '10px',
    borderBottom: '1px solid rgb(79, 98, 148)',
  },
  h4: {
    padding: '10px',
  },
  button: {
    display: 'block',
    appearance: 'none',
    margin: '40px 0px 20px',
    border: '1px solid #333',
    // textTransform: 'uppercase',
    padding: '10px 20px',
    borderRadius: '4px',
  },
}


const SavedBooks = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

    // Get me query
    const { data } = useQuery(QUERY_ME);
    // Remove book mutation
    const [removeBook] = useMutation(REMOVE_BOOK);

  useEffect(() => {
    if (data?.me) {
      setUserData(data.me)
    }
  }, [data])

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log (bookId)
      await removeBook({
        variables: {
          bookId
        },
      });
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Container>
          <h2 style={styles.h2}>Viewing saved articles!</h2>
      </Container>
      <Container>
        <h4 style={styles.h4}>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved article!'}
        </h4>
        <CardColumns>
          {userData.savedBooks && userData.savedBooks.filter(book => book != null)
            .map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this article!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;