import { combineReducers } from "redux";
import searchReducer, { todoListReducer } from './searchReducer';

const reducers = combineReducers({
  search: searchReducer,
  todoList: todoListReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>