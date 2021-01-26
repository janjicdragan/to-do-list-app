import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      alert("Input a proper value");
      return;
    }

    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To do list</h1>
      <TodoForm onSubmit={addTodo} todos={todos} />
    </div>
  );
}

export default TodoList;
