import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './App.css';
import SearchForm from 'components/Form';
import TodoTable from 'components/Table';
import {SearchFormData, SelectOptionsEnum} from 'models/interfaces';
import {SearchContext} from 'context/searchContext';
import Users from "./components/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, Link
} from "react-router-dom";

function App() {
  const initialState: SearchFormData = {
    searchKeyword: '',
    completed: SelectOptionsEnum.NA
  };

  const [formData, setData] = useState(initialState);

  return (
    <React.Fragment>
      <SearchContext.Provider value={{formData, setData}}>
        <Container fluid="sm">
          <Row className="justify-content-md-center">
            <Col lg="9" md="11" sm="12">
              <Router>
                <Switch>
                  <Route path="/users">
                    <Row>
                      <Col><h2 className="mb-4 mt-4 fw-bold" data-testid="header">Users</h2></Col>
                    </Row>
                    <Row>
                      <Col><Users/></Col>
                    </Row>
                  </Route>
                  <Route path="/todo/:userId">
                    <Row>
                      <Col><h2 className="mb-4 mt-4 fw-bold" data-testid="header">Todos</h2></Col>
                    </Row>
                    <Row>
                      <Col><SearchForm/></Col>
                    </Row>
                    <Row>
                      <Col><TodoTable/></Col>
                    </Row>
                    <Row>
                      <Col><Link to="/users">&lt;- Back to users</Link></Col>
                    </Row>
                  </Route>
                  <Redirect exact from="/" to="users" />
                </Switch>
              </Router>
            </Col>
          </Row>
        </Container>
      </SearchContext.Provider>
    </React.Fragment>
  );
}

export default App;
