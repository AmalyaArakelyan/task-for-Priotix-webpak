import { CHANGE, CLEAR } from './Types';

export const changeKeyword = key => {
  return async dispatch => {
    dispatch({
      type: CHANGE,
      payload: key
    });
  };
};
export const clearKeyword = key => {
  return async dispatch => {
    dispatch({
      type: CLEAR
    });
  };
};


