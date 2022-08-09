import {
  ADD_TODO,
  ADD_TODO_API,
  REMOVE_TODO,
  TOGGLE_TODO,
  FETCH_TODO,
} from '../types/todoTypes';

export const addTodoAction = (payload) => ({
  type: ADD_TODO,
  payload: payload,
});
export const removeTodoAction = (payload) => ({
  type: REMOVE_TODO,
  payload: payload,
});
export const addTodoApiAction = (payload) => ({
  type: ADD_TODO_API,
  payload: payload,
});
export const toggleTodoAction = (payload) => ({
  type: TOGGLE_TODO,
  payload: payload,
});
export const fetchTodoAction = () => ({
  type: FETCH_TODO,
});
