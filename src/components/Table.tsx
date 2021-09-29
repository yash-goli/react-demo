import { SearchContext } from "context/searchContext";
import { SearchFormData, TodoItem, SelectOptionsEnum } from "models/interfaces";
import React, { useEffect, useContext } from "react";
import { Table, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "state";
import { RootState } from "state/reducers";

function TodoTable() {
  const { formData } = useContext(SearchContext);

  const searchState = useSelector((state: RootState) => state.todoList);

  const dispatch = useDispatch();

  const { fetchTodoList } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (<>
    <ProcessTodoList todoList={searchState.todoList} searchFilter={formData} />
  </>)
}

function ProcessTodoList(props: { todoList: TodoItem[], searchFilter: SearchFormData }) {
  const titleCondition = (item: TodoItem) => {
    if (props.searchFilter.searchKeyword) {
      return item.title.includes(props.searchFilter.searchKeyword);
    } else {
      return true;
    }
  };

  const completedCondition = (item: TodoItem) => {
    if (props.searchFilter.completed) {
      const completed = props.searchFilter.completed === SelectOptionsEnum.YES;
      return item.completed === completed;
    } else {
      return true;
    }
  };

  const filterFn = (item: TodoItem) => {
    return titleCondition(item) && completedCondition(item);
  };

  const filteredList = props.todoList.filter(filterFn);

  return (<>
    {filteredList.length ?
      <TodoListTable todoList={filteredList} /> :
      <Alert variant="danger" data-testid="alert">
        No results for the given search parameters!
      </Alert>}
  </>);
}

function TodoListTable(props: { todoList: TodoItem[] }) {
  return <>
    <Table striped size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody data-testid="todo-list">
        <TodoRow todoList={props.todoList} />
      </tbody>
    </Table>
  </>
}

function TodoRow(props: { todoList: TodoItem[] }) {
  return <React.Fragment>
    {props.todoList.map(row => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.title}</td>
        <td>{row.completed ? 'Yes' : 'No'}</td>
      </tr>
    ))}
  </React.Fragment>
}

export default TodoTable;