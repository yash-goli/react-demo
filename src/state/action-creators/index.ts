import { SearchFormData } from "models/Interfaces";
import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const todoSearch = (searchFormData: SearchFormData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_FILTER,
      payload: searchFormData
    });
  }
};