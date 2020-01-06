import React, { useState } from "react";
let iid = 0;
const todoApp = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleClick = event => {
    const todo = { text: value, id: iid++ };
    setData([...data, todo]);
    setValue("");
  };

  const handleRemove = id => {
    const remainder = data.filter(todo => {
      if (todo.id !== id) return todo;
    });
    setData(remainder);
  };

  return (
    <div>
      <h3>todo List</h3>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>+</button>
      <div>
        {data.map(todo => (
          <li
            key={todo.id}
            onClick={() => {
              handleRemove(todo.id);
            }}
          >
            {todo.text}
          </li>
        ))}
      </div>
    </div>
  );
};
export default todoApp;
