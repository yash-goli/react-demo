import { SearchFormData, SelectOptionsEnum, TodoPayLoad } from "models/Interfaces";
import { ActionType } from "state/action-types";
import { Action } from "state/actions";

const initialState: SearchFormData = {
  searchKeyword: '',
  completed: SelectOptionsEnum.NA
};

const initialTodoState: TodoPayLoad = {
  todoList: [],
  error: '',
};

const reducer = (state = initialState, action: Action): SearchFormData => {
  switch (action.type) {
    case ActionType.SEARCH_FILTER:
      return { ...state, searchKeyword: action.payload.searchKeyword, completed: action.payload.completed };
    default:
      return state;
  }
}

export const todoListReducer = (state = initialTodoState, action: Action): TodoPayLoad => {
  switch (action.type) {
    case ActionType.GET_TODO_SUCCESS:
      return {todoList: action.payload.todoList, error: ''};
    case ActionType.GET_TODO_ERROR:
      return {todoList: [], error: action.payload.error};
    default:
      return state;
  }
}

export default reducer;