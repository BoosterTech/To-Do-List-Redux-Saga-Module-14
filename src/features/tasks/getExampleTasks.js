export const getExampleTasks = async () => {
  const response = await fetch(
    "/To-Do-List-Redux-Saga-Module-14/exampleTask.json"
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
