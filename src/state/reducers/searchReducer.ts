import { SearchFormData, SelectOptionsEnum } from "models/Interfaces";
import { ActionType } from "state/action-types";
import { Action } from "state/actions";

const initialState: SearchFormData = {
  searchKeyword: '',
  completed: SelectOptionsEnum.NA
};

const reducer = (state = initialState, action: Action): SearchFormData => {
  switch (action.type) {
    case ActionType.SEARCH_FILTER:
      return { ...state, searchKeyword: action.payload.searchKeyword, completed: action.payload.completed };
    default:
      return state;
  }
}

export default reducer;