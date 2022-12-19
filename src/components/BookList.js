import { Card, Col, Row } from 'react-bootstrap';
import BookDetail from './BookDetail';

export default function BookList() {
  return (
    <>
      <Row>
        <Col xs={8}>
          <Row xs={3}>
            {Array.from({ length: 6 }).map((book) => (
              <Card border="info" text="info" className="text-center shadow">
                <Card.Body>Ki nghe lay Tay</Card.Body>
              </Card>
            ))}
          </Row>
        </Col>
        <Col xs={4}>
          <BookDetail />
        </Col>
      </Row>
    </>
  );
}
