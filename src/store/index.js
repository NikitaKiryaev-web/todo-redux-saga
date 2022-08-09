import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from '@redux-saga/core';
import { todoReducer } from './reducers/todoReducer';
import { inputReducer } from './reducers/inputReducer';
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todo: todoReducer,
  input: inputReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootWatcher);
