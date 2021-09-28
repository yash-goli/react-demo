import { SearchFormData } from "models/interfaces";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import getData from "services/Services";

export const todoSearch = (searchFormData: SearchFormData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_FILTER,
      payload: searchFormData
    });
  }
};

export const fetchTodoList = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await getData();
      dispatch({
        type: ActionType.GET_TODO_SUCCESS,
        payload: {
          todoList: response,
          error: ''
        }
      })
    } catch(ex) {
      dispatch({
        type: ActionType.GET_TODO_ERROR,
        payload: {
          todoList: [],
          error: (ex as Error).message
        }
      })
    }
  }
};