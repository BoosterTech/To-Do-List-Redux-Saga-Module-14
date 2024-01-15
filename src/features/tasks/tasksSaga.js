import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "something went wrong!");
  }
}

export function* watchFetchExampleTasks() {
  console.log("saga jest podlaczona");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
