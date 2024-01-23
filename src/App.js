import { Link, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";

import AuthorPage from "./features/author/index";

const App = () => (
  <HashRouter basename="/todo-list-module-14">
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/author">About Author</Link>
        </li>
      </ul>
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
    </nav>
  </HashRouter>
);

export default App;
