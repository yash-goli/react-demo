import { SearchFormData, TodoPayLoad } from "models/interfaces";
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

export type Action = SearchAction | GetTodoSuccessAction | GetTodoErrorAction;