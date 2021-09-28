import { SearchFormData, SelectOptionsEnum } from "models/Interfaces";
import { createContext } from "react";

export const SearchContext = createContext<{formData: SearchFormData, setData: (state: SearchFormData) => void}>({
  formData: {
    searchKeyword: '',
    completed: SelectOptionsEnum.NA
  }, 
  setData: (state: SearchFormData) => {}
});