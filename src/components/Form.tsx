import React, { useContext } from "react";
import { Col, Form, Row } from 'react-bootstrap';
import { SelectOptionsEnum } from '../models/interfaces';
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
            <Form.Label column className="pe-0">
              Search:
            </Form.Label>
            <Col lg="9" md="8" sm="9" xs="10" className="p-sm-0">
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
            <Form.Label column className="pe-0">
              Completed:
            </Form.Label>
            <Col lg="8" md="8" sm="7" xs="9" className="ps-0">
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