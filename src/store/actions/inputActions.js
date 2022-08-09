import { CHANGE_INPUT_VALUE, SET_INPUT_ERROR } from '../types/inputTypes';

export const changeInputValueAction = (payload) => ({
  type: CHANGE_INPUT_VALUE,
  payload,
});

export const setInputErrorAction = (payload) => ({
  type: SET_INPUT_ERROR,
  payload,
});
