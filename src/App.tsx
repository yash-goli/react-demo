import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import SearchForm from 'components/Form';
import TodoTable from 'components/Table';

function App() {
    return (
        <React.Fragment>
            <Container fluid="md">
                <Row>
                    <h3 >Todos</h3>
                </Row>
                <Row>
                    <SearchForm/>
                </Row>
                <Row>
                    <TodoTable/>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default App;
