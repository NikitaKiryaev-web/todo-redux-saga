import { put, takeEvery, call } from 'redux-saga/effects';
import { addTodoApiAction } from '../actions/todoActions';
import { FETCH_TODO } from '../types/todoTypes';

const fetchTodoFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');

function* fetchTodoWorker() {
  const response = yield call(fetchTodoFromApi);
  const json = yield call(() => Promise.resolve(response.json()));
  yield put(addTodoApiAction(json));
}

export function* todoWatcher() {
  yield takeEvery(FETCH_TODO, fetchTodoWorker);
}
