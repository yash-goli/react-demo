import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import SearchForm from 'components/Form';
import TodoTable from 'components/Table';
import { SearchFormData, SelectOptionsEnum } from 'models/Interfaces';
import { SearchContext } from 'context/searchContext';

function App() {
  const initialState: SearchFormData = {
    searchKeyword: '',
    completed: SelectOptionsEnum.NA
  };

  const [formData, setData] = useState(initialState);

  return (
    <React.Fragment>
      <SearchContext.Provider value={{formData, setData}}>
        <Container fluid="md">
          <Row>
            <h3 >Todos</h3>
          </Row>
          <Row>
            <SearchForm />
          </Row>
          <Row>
            <TodoTable />
          </Row>
        </Container>
      </SearchContext.Provider>
    </React.Fragment>
  );
}

export default App;
