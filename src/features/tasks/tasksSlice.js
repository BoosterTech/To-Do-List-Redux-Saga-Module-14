import { createSlice } from "@reduxjs/toolkit";
import { loadTasksFromLocalStorage } from "./taskslocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: Array.isArray(loadTasksFromLocalStorage())
      ? loadTasksFromLocalStorage()
      : [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },

    fetchExampleTasks: (state) => {
      state.loading = true;
    },

    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.loading = false;
      state.tasks = tasks;
    },

    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  setTasks,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;

export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsAnyTaskDone = (state) =>
  selectTasks(state).some(({ done }) => done);
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectLoading = (state) => state.tasks.loading;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
