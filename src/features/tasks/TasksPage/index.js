import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { MainWrapper } from "../../../common/MainWrapper/styled";
import Search from "./Search";
import { FetchExampleTasksButton } from "./Buttons/FetchExampleTasksButton";

function TasksPage() {
  return (
    <MainWrapper>
      <Header title="Tasks List" />
      <Section
        title="Add new task"
        extraHeaderContent={<FetchExampleTasksButton />}
        bodyContent={<Form />}
        id="section__flex"
        headertype="section__header"
      />
      <Section
        title="Search tasks"
        bodyContent={<Search />}
        headertype="section__headerTop"
      />
      <Section
        title="Tasks list"
        extraHeaderContent={<Buttons />}
        bodyContent={<TaskList />}
        id="section__flex"
        headertype="section__header"
      />
    </MainWrapper>
  );
}

export default TasksPage;
