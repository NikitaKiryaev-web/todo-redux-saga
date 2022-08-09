import { CHANGE_INPUT_VALUE, SET_INPUT_ERROR } from '../types/inputTypes';

const initialState = {
  text: '',
  errorText: '',
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, text: action.payload };
    case SET_INPUT_ERROR:
      return {
        ...state,
        errorText: action.payload,
      };
    default:
      return state;
  }
};
