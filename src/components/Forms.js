import { Col, Row } from 'react-bootstrap';
import AuthorForm from './AuthorForm';
import BookForm from './BookForm';

export default function Forms() {
  return (
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <AuthorForm />
      </Col>
    </Row>
  );
}
