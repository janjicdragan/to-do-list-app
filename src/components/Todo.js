import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <article
      key={index}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <span>{todo.text}</span>
      <section className="icons">
        <AiOutlineCheckCircle
          className="check-icon"
          onClick={() => completeTodo(todo.id)}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
      </section>
    </article>
  ));
}

export default Todo;
