import React, { useState } from "react";

function TodoForm({ onSubmit, todos }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: todos.length + 1,
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          onChange={handleChange}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
