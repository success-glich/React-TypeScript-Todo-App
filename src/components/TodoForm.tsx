import React, { ChangeEvent, useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm: React.FC = () => {
  // const [text,setText] =
  const [text, setText] = useState("");
  const { addTodo } = useTodo();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter a new todo.."
        style={{ padding: "0.8vmax", borderRadius: "10px" }}
      />
      <button type="submit" style={{ marginLeft: "2vmax" }}>
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
