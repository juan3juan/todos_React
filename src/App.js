import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./components/todos";
import EditTodo from "./components/edit";
import CreateTodo from "./components/create";
import SimpleTodo from "./components/simpleTodo";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/" className="nav-link p-3">
              Todos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link p-3">
              Create
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/simple" className="nav-link p-3">
              Simple
            </Link>
          </li>
        </ul>
      </nav>

      <br />
      <div className="container">
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/simple" component={SimpleTodo} />
      </div>
    </Router>
  );
}

export default App;
