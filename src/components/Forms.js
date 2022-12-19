import { Button, Col, Form, Row } from 'react-bootstrap';

export default function Forms() {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBookName">
            <Form.Label>Ten sach</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookGenre">
            <Form.Label>The loai sach</Form.Label>
            <Form.Control type="text" placeholder="Enter genre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookAuthor">
            <Form.Label>Tac gia</Form.Label>
            <Form.Select disabled />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
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
