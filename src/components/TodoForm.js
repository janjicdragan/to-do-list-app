import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      //using this for id in order to get unique ids in a simple way
      id: new Date().getTime().toString(),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update your todo"
              value={input}
              name="text"
              onChange={handleChange}
              ref={inputRef}
              className="todo-input edit"
            />
            <button className="todo-button edit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              onChange={handleChange}
              ref={inputRef}
              className="todo-input"
            />
            <button className="todo-button">Add todo</button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
