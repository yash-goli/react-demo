import { combineReducers } from "redux";
import searchReducer, {todoListReducer, usersListReducer} from './searchReducer';

const reducers = combineReducers({
  search: searchReducer,
  todoList: todoListReducer,
  userList: usersListReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>