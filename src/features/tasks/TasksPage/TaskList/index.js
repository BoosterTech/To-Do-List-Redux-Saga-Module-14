import React from "react";
import { Button, ListItem, TaskContent, TaskListStyled } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask } from "../../tasksSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <TaskListStyled>
      {tasks.map((task, id) => (
        <ListItem key={id} hidden={hideDone && task.done}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <TaskContent done={task.done}>
            <Link to={`/tasks/${task.id}`}>{task.content}</Link>
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
