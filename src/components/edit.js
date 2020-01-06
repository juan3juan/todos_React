import React, { useState, useEffect } from "react";
import axios from "axios";

const EditTodo = props => {
  const [todo, setTodo] = useState({
    description: "",
    responsible: "",
    priority: "",
    completed: false
  });

  useEffect(() => {
    axios
      .get("http://localhost:3010/todos/" + props.match.params.id)
      .then(res => {
        setTodo(res.data);
        console.log(todo);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const handleChange = event => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    debugger;
    const newTodo = {
      description: todo.description,
      responsible: todo.responsible,
      priority: todo.priority,
      completed: todo.completed
    };
    console.log(newTodo);
    axios
      .post(
        "http://localhost:3010/todos/update/" + props.match.params.id,
        newTodo
      )
      .then(res => console.log(res));
    console.log(props.match.params.id);
    props.history.push("/");
  };
  return (
    <div>
      <h3 align="center">Update Todo</h3>
      <form className="container">
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            name="responsible"
            value={todo.responsible}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              value="Low"
              checked={todo.priority === "Low"}
              onChange={handleChange}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              value="Medium"
              checked={todo.priority === "Medium"}
              onChange={handleChange}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              value="High"
              checked={todo.priority === "High"}
              onChange={handleChange}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="completed"
            value="High"
            checked={todo.completed}
            onChange={handleChange}
          />
          <label className="form-check-label">completed</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
