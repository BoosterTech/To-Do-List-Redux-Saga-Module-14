import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../../tasksSlice";
import { Button } from "../styled";
import { Wrapper } from "./styled";

export const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
        {loading ? "Loading..." : "Download example tasks"}
      </Button>
    </Wrapper>
  );
};
