import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { MainWrapper } from "../../../common/MainWrapper/styled";
import Search from "./Search";

function TasksPage() {
  return (
    <MainWrapper>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        bodyContent={<Form />}
        headertype="section__headerTop"
      />
      <Section
        title="Wyszukiwarka"
        bodyContent={<Search />}
        headertype="section__headerTop"
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        bodyContent={<TaskList />}
        id="section__flex"
        headertype="section__header"
      />
    </MainWrapper>
  );
}

export default TasksPage;
