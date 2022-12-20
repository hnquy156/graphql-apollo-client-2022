import { Button, Col, Form, Row } from 'react-bootstrap';
import BookForm from './BookForm';

export default function Forms() {
  return (
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <Form>
          <Form.Group className="mb-3 invisible">
            <Form.Label>1</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAuthorName">
            <Form.Label>Ten tac gia</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAuthorAge">
            <Form.Label>Tuoi</Form.Label>
            <Form.Control type="text" placeholder="Enter genre" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
