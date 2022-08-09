import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_TODO_API,
} from '../types/todoTypes';

const defaultState = {
  todo: [],
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todoItem) => todoItem.id !== action.payload),
      };
    case ADD_TODO_API:
      return {
        ...state,
        todo: [...state.todo, ...action.payload],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((todoItem) => {
          return todoItem.id === action.payload
            ? {
                ...todoItem,
                completed: !todoItem.completed,
              }
            : todoItem;
        }),
      };

    default:
      return state;
  }
};
