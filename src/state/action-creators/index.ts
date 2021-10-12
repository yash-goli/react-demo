import { SearchFormData } from "models/interfaces";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import {getData, getUsers} from "../../services/services";

export const todoSearch = (searchFormData: SearchFormData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_FILTER,
      payload: searchFormData
    });
  }
};

export const fetchTodoList = (userId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await getData(userId);
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

export const fetchUsersList = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await getUsers();
      dispatch({
        type: ActionType.GET_USER_SUCCESS,
        payload: {
          usersList: response,
          error: ''
        }
      })
    } catch(ex) {
      dispatch({
        type: ActionType.GET_USER_ERROR,
        payload: {
          usersList: [],
          error: (ex as Error).message
        }
      })
    }
  }
};