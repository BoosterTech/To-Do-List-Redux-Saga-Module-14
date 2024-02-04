import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";

import AuthorPage from "./features/author/index";
import { Navigation } from "./common/TopNavigation/Navigation";
import { toAuthor, toTask, toTasks } from "./routes";

const App = () => (
  <HashRouter basename="/todo-list-module-14">
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
