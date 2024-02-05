import { MainWrapper } from "../../../common/MainWrapper/styled";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { ContentWrapper, TaskTitleWrapper } from "./styled";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <MainWrapper>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania😔"}
        bodyContent={
          !!task && (
            <ContentWrapper>
              <strong>Ukończono: {task.done ? "Tak" : "Nie"}</strong>
            </ContentWrapper>
          )
        }
        headertype="section__headerTop"
      />
    </MainWrapper>
  );
};
export default TaskPage;
