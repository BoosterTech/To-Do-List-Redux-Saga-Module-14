const localStorageKey = "tasksData";

export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
