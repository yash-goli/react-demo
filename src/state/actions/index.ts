import { SearchFormData, TodoPayLoad, UsersPayLoad } from "models/interfaces";
import { ActionType } from "../action-types";

interface SearchAction {
  type: ActionType.SEARCH_FILTER,
  payload: SearchFormData
}

interface GetTodoSuccessAction {
  type: ActionType.GET_TODO_SUCCESS,
  payload: TodoPayLoad
}

interface GetTodoErrorAction {
  type: ActionType.GET_TODO_ERROR,
  payload: TodoPayLoad
}

interface GetUsersSuccessAction {
  type: ActionType.GET_USER_SUCCESS,
  payload: UsersPayLoad
}

interface GetUsersErrorAction {
  type: ActionType.GET_USER_ERROR,
  payload: UsersPayLoad
}

export type Action = SearchAction | GetTodoSuccessAction | GetTodoErrorAction | GetUsersSuccessAction | GetUsersErrorAction;