import React, { useState } from "react";
import axios from "axios";

const CreateTodo = () => {
  const [todo, setTodo] = useState({
    description: "",
    responsible: "",
    priority: "",
    completed: false
  });

  const onChange = event => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${todo.description}`);
    console.log(`Todo Responsible: ${todo.responsible}`);
    console.log(`Todo Priority: ${todo.priority}`);
    const newTodo = {
      description: todo.description,
      responsible: todo.responsible,
      priority: todo.priority,
      completed: todo.completed
    };
    debugger;
    axios
      .post("http://localhost:3010/todos/add", newTodo)
      .then(res => console.log(res.data));
    debugger;

    setTodo({
      description: "",
      responsible: "",
      priority: "",
      completed: false
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={todo.description}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            name="responsible"
            value={todo.responsible}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityLow"
              value="Low"
              checked={todo.priority === "Low"}
              onChange={onChange}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityMedium"
              value="Medium"
              checked={todo.priority === "Medium"}
              onChange={onChange}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityHigh"
              value="High"
              checked={todo.priority === "High"}
              onChange={onChange}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
