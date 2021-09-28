import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import SearchForm from 'components/Form';
import TodoTable from 'components/Table';
import { SearchFormData, SelectOptionsEnum } from 'models/interfaces';
import { SearchContext } from 'context/searchContext';

function App() {
  const initialState: SearchFormData = {
    searchKeyword: '',
    completed: SelectOptionsEnum.NA
  };

  const [formData, setData] = useState(initialState);

  return (
    <React.Fragment>
      <SearchContext.Provider value={{ formData, setData }}>
        <Container fluid="sm">
          <Row className="justify-content-md-center">
            <Col lg="9" md="11" sm="12">
              <Row>
                <Col><h2 className="mb-4 mt-4 fw-bold">Todos</h2></Col>
              </Row>
              <Row>
                <Col><SearchForm /></Col>
              </Row>
              <Row>
                <Col><TodoTable /></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SearchContext.Provider>
    </React.Fragment>
  );
}

export default App;
