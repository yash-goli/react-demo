import { SearchFormData } from "models/Interfaces";
import { ActionType } from "../action-types";

interface SearchAction {
  type: ActionType.SEARCH_FILTER,
  payload: SearchFormData
}

export type Action = SearchAction