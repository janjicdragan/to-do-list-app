import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const loadTodos = () => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodos([]);
    } else {
      const data = JSON.parse(localStorage.getItem("todos"));
      setTodos(data);
    }
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    if (!todo.text) {
      alert("Input a proper value");
      return;
    }

    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArray = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArray);
  };

  const clearTodoList = () => {
    setTodos([]);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      alert("Input a proper value");
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>To do list</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      {todos.length === 0 ? (
        ""
      ) : (
        <button className="todo-button delete" onClick={clearTodoList}>
          Clear all
        </button>
      )}
    </div>
  );
}

export default TodoList;
