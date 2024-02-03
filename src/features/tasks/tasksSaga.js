import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
  selectTasks,
} from "./tasksSlice";
import { saveTasksToLocalStorage } from "./taskslocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);

    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak !");
  }
}

function* saveTasksToLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksToLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksToLocalStorageHandler);
}
