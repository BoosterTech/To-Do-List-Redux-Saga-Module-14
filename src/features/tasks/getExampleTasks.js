export const getExampleTasks = async () => {
  const response = await fetch(
    "http://localhost:3000/to-do-list-redux-saga/exampleTasks.json"
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
