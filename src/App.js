import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";

import AuthorPage from "./features/author/index";
import { Navigation } from "./common/TopNavigation/Navigation";

const App = () => (
  <HashRouter basename="/todo-list-module-14">
    <Navigation />
    <Switch>
      <Route path="/tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/tasks" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
