import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
import * as redux from 'react-redux';


describe('TodoList', () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    // Mock useSelector hook
    spyOnUseSelector = jest.spyOn(redux, 'useSelector');
    spyOnUseSelector.mockReturnValue({
      todoList: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ],
      error: null
    });

    // Mock useDispatch hook
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
    // Mock dispatch function returned from useDispatch
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders todo header', () => {
    const component = render(<App />);
    const header = component.getByTestId('header');
    expect(header.textContent).toEqual('Todos');
  });

  test('renders search text box', () => {
    const component = render(<App />);
    const searchKeyword = component.getByTestId('search-keyword') as HTMLInputElement;
    expect(searchKeyword.value).toEqual('');
  });

  test('renders completed select input', () => {
    const component = render(<App />);
    const completed = component.getByTestId('completed') as HTMLSelectElement;
    expect(completed.value).toEqual('');
  });

  test('renders table with todo list of 5 items', () => {
    const component = render(<App />);
    const todoList = component.getByTestId('todo-list');
    expect(todoList.childNodes.length).toEqual(5);
  });

  test('change value of search text box works', () => {
    const component = render(<App />);
    const searchKeyword = component.getByTestId('search-keyword') as HTMLInputElement;
    fireEvent.change(searchKeyword, {target: {value: 'test'}});
    expect(searchKeyword.value).toBe('test');
  });

  test('change value of completed select input works', () => {
    const component = render(<App />);
    const completed = component.getByTestId('completed') as HTMLSelectElement;
    fireEvent.change(completed, {target: {value: 'Yes'}});
    expect(completed.value).toBe('Yes');
  });

  test('given search input de and completed No, the table row should be length of 2', () => {
    const component = render(<App />);
    const searchKeyword = component.getByTestId('search-keyword') as HTMLInputElement;
    const completed = component.getByTestId('completed') as HTMLSelectElement;
    fireEvent.change(searchKeyword, {target: {value: 'de'}});
    fireEvent.change(completed, {target: {value: 'No'}});
    const todoList = component.getByTestId('todo-list');
    expect(todoList.childNodes.length).toEqual(2);
  });

  test('given search input de and completed Yes, the table is not present', () => {
    const component = render(<App />);
    const searchKeyword = component.getByTestId('search-keyword') as HTMLInputElement;
    const completed = component.getByTestId('completed') as HTMLSelectElement;
    fireEvent.change(searchKeyword, {target: {value: 'de'}});
    fireEvent.change(completed, {target: {value: 'Yes'}});
    const todoList = screen.queryByTestId('todo-list');
    expect(todoList).not.toBeInTheDocument();
  });

  test('given search input de and completed Yes, the alert is present', () => {
    const component = render(<App />);
    const searchKeyword = component.getByTestId('search-keyword') as HTMLInputElement;
    const completed = component.getByTestId('completed') as HTMLSelectElement;
    fireEvent.change(searchKeyword, {target: {value: 'de'}});
    fireEvent.change(completed, {target: {value: 'Yes'}});
    const alert = component.getByTestId('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.textContent).toEqual('No results for the given search parameters!');
  });
});

