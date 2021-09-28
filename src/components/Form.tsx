import React, { useState } from "react";
import { Col, Form, Row } from 'react-bootstrap';
import { SearchFormData, SelectOptionsEnum } from '../models/Interfaces';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from "state";

function SearchForm() {
  const initialState: SearchFormData = {
    searchKeyword: '',
    completed: SelectOptionsEnum.NA
  };

  const dispatch = useDispatch();

  const { todoSearch } = bindActionCreators(actionCreators, dispatch);

  const [formData, setData] = useState(initialState);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const data = { ...formData, searchKeyword: value };
    setData(data);
    todoSearch(data);
  }

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const data = { ...formData, completed: value as SelectOptionsEnum };
    setData(data);
    todoSearch(data);
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