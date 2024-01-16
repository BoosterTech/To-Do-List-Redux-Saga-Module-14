import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonsWrapper } from "./styled";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsAnyTaskDone,
  selectIsEveryTaskDone,
  fetchExampleTasks,
} from "../../tasksSlice";

const Buttons = () => {
  const { hideDone } = useSelector(selectTasksState);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    <ButtonsWrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Load example tasks
      </Button>
      {!areTasksEmpty && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
            disabled={!isAnyTaskDone}
          >
            {" "}
            {hideDone ? "Pokaż" : "Ukryj"} ukończone{" "}
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            {" "}
            Ukończ wszystkie{" "}
          </Button>
        </>
      )}
    </ButtonsWrapper>
  );
};

export default Buttons;
