import { MainWrapper } from "../../../common/MainWrapper/styled";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <MainWrapper>
      <Header title="Task details" />
      <Section
        title={task ? task.content : "Task Not Found 😔"}
        bodyContent={
          <>
            <strong>Completed: {task.done ? "Yes" : "No"}</strong>
          </>
        }
        headertype="section__headerTop"
      />
    </MainWrapper>
  );
};
export default TaskPage;
