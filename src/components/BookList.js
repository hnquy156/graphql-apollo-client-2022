import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { getBooks } from '../graphql-client/queries';
import BookDetail from './BookDetail';

export default function BookList() {
  const [bookSelected, setBookSelected] = useState(null);
  const { loading, error, data } = useQuery(getBooks);
  if (loading) return 'Loading ...';
  if (error) return 'ERROR____';

  return (
    <>
      <Row>
        <Col xs={8}>
          <Row xs={3}>
            {data.books.map((book, index) => (
              <Card
                key={book.id}
                border="info"
                text="info"
                className="text-center shadow"
                onClick={setBookSelected.bind(this, book.id)}
              >
                <Card.Body>{book.name}</Card.Body>
              </Card>
            ))}
          </Row>
        </Col>
        <Col xs={4}>
          <BookDetail bookId={bookSelected} />
        </Col>
      </Row>
    </>
  );
}
