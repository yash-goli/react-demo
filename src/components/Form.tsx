import { Col, Form, Row } from 'react-bootstrap';

function SearchForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Col sm>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column>
              Search:
            </Form.Label>
            <Col>
              <Form.Control type="email" placeholder="Keyword..." />
            </Col>
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column>
              Completed:
            </Form.Label>
            <Col>
              <Form.Select defaultValue="-">
                <option>-</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;