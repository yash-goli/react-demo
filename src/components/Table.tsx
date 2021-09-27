import { TodoItem } from "models/Interfaces";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import getData from "services/Services";
import PropTypes from 'prop-types';

function TodoTable() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const getTodoData = async () => {
    const response = await getData();
    setTodoList(response);
  };

  useEffect(() => {
    getTodoData();
  });

  return (
    <Table striped size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <TodoRow todoList={todoList} />
      </tbody>
    </Table>
  )
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