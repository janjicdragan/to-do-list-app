import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 100000),
    //   text: input,
    // });

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
      </form>
      <button>Add todo</button>
    </div>
  );
}

export default TodoForm;
