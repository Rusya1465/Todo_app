import React from "react";
import { useState } from "react";

function Todos(props) {
  const [todos, setTodos] = useState([]);
  createTodosItem = (e) => {
    const newTodoItem = [{ content: e.target.value, complete: false }];
    setTodos(newTodoItem);
  };
  return (
    <div className="todos">
      <div className="todos__input_field">
        <input
          type="text"
          className="input-field"
          placeholder="What need to be done?"
        />
      </div>
    </div>
  );
}

export default Todos;
