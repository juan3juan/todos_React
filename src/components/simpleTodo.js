import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  // Input tracker
  //let input;
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      <input
        // ref={node => {
        //   input = node;
        // }}
        type="text"
        name="value"
        value={value}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
      >
        +
      </button>
    </div>
  );
};

const TodoList = ({ todos, remove }) => {
  // Map through the todos
  //   const todoNode = todos.map(todo => {
  //     return <Todo todo={todo} key={todo.id} remove={remove} />;
  //   });
  //   return <ul>{todoNode}</ul>;
  return (
    <div>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} remove={remove} />
      ))}
    </div>
  );
};

const Todo = ({ todo, remove }) => {
  // Each Todo
  return (
    <li
      onClick={() => {
        remove(todo.id);
      }}
    >
      {todo.text}
    </li>
  );
};

const Title = () => {
  return (
    <div>
      <div>
        <h1>to-do</h1>
      </div>
    </div>
  );
};

// Container Component
// Todo Id
let iid = 0;
const TodoApp = () => {
  const [data, setData] = useState([]);

  // Add todo handler
  function addTodo(val) {
    // Assemble data
    const todo = { text: val, id: iid++ };
    // Update data
    // this.state.data.push(todo);
    // // Update state
    // this.setState({ data: this.state.data });
    setData([...data, todo]);

    // this.setState(state => {
    //   const data = [...state.data, todo];
    //   return {
    //     data
    //   };
    // });
  }
  // Handle remove
  function handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = data.filter(todo => {
      if (todo.id !== id) return todo;
    });
    // Update state with filter
    setData(remainder);
    //this.setState({ data: remainder });
  }

  // Render JSX
  return (
    <div>
      <Title />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={data} remove={handleRemove} />
    </div>
  );
};

export default TodoApp;
