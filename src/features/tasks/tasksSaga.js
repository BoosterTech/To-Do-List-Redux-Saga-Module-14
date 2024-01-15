import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { saveTasksToLocalStorage } from "./taskslocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "something went wrong!");
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
