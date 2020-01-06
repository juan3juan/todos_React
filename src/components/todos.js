import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3010/todos")
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [todos]);
  const handleRemove = id => {
    axios
      .get("http://localhost:3010/todos/delete/" + id)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
    // const remainder = todos.filter(todo => {
    //   if (todo._id !== id) return todo;
    // });
    // setTodos(remainder);
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log("todos");
    console.log(todos);
  };
  return (
    <div>
      <h3>Todo List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => {
            return (
              <tr key={i}>
                <td>{todo.description}</td>
                <td>{todo.responsible}</td>
                <td>{todo.priority}</td>
                <td>
                  <Link to={"/edit/" + todo._id}>Edit</Link>
                </td>
                <td>
                  <button onClick={() => handleRemove(todo._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Click</button>
      <style jsx>{`
        .completed {
          text-decoration: line-through;
        }
      `}</style>
    </div>
  );
};

export default TodosList;
