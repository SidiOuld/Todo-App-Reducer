import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "./reducers/TodoReducer";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const handleChange = e => {
    setTodoInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      {/* {state.map(todo => todo.item)}
      {""} */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoInput"
          value={todoInput}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: todoInput });
            setTodoInput("");
          }}
        >
          Add
        </button>
      </form>
      <div>
        {state.map(todo => (
          <h1>{todo.item}</h1>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
