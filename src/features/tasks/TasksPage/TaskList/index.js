import React from "react";
import {
  Button,
  ListItem,
  TaskContent,
  TaskLink,
  TaskListStyled,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  const { tasks } = useSelector((state) => selectTasksByQuery(state, query));

  const { hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <TaskListStyled>
      {tasks.map((task) => (
        <ListItem key={task.id} hidden={hideDone && task.done}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <TaskContent done={task.done}>
            <TaskLink to={`/tasks/${task.id}`}>{task.content}</TaskLink>
          </TaskContent>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </ListItem>
      ))}
    </TaskListStyled>
  );
};

export default TaskList;
