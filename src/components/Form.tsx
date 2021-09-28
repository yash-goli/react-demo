import React, { useContext } from "react";
import { Col, Form, Row } from 'react-bootstrap';
import { SelectOptionsEnum } from '../models/Interfaces';
import { SearchContext } from '../context/searchContext';

function SearchForm() {
  const { formData, setData } = useContext(SearchContext);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const data = { ...formData, searchKeyword: value };
    setData(data);
  }

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const data = { ...formData, completed: value as SelectOptionsEnum };
    setData(data);
  }
  
  return (
    <Form>
      <Row className="mb-3">
        <Col sm>
          <Form.Group as={Row} className="mb-3" controlId="searchKeyword">
            <Form.Label column>
              Search:
            </Form.Label>
            <Col>
              <Form.Control 
                type="text" 
                placeholder="Keyword..." 
                name="searchKeyword"
                onChange={onChangeInput}
              />
            </Col>
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group as={Row} className="mb-3" controlId="completed">
            <Form.Label column>
              Completed:
            </Form.Label>
            <Col>
              <Form.Select defaultValue="" name="completed" onChange={onChangeSelect}>
                <option value="">-</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;