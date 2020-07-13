import { CHANGE, CLEAR } from './Types';

const initState = {
  keyword: null,
  searchResult:null
};

export const SearchReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        keyword: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        keyword: null,
      };
    default:
      return state;
  }
};
