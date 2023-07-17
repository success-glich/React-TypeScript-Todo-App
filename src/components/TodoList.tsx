import React, { useState, ChangeEvent } from "react";
import { useTodo } from "../context/TodoContext";

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo, updateTodo } = useTodo();
  const [editableTodoId, setEditableTodoId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };
  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleToggleTodo = (id: number) => {
    toggleTodo(id);
  };

  const handleCancel = () => {
    setEditableTodoId(null);
    setEditText("");
  };
  const handleUpdate = (id: number) => {
    setEditableTodoId(id);
  };
  const handleSave = (id: number) => {
    setEditText("");
    setEditableTodoId(null);
    updateTodo(id, editText);
  };
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <li
            style={{
              display: "flex",
              padding: "0.2px",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid orange",
              listStyle: "none",
              marginLeft: "-38px",
            }}
            key={todo.id}
          >
            {editableTodoId === todo.id ? (
              <>
                <input type="text" value={editText} onChange={handleChange} />
                <button
                  style={{ marginRight: "2px" }}
                  onClick={() => handleSave(todo.id)}
                >
                  save
                </button>
                <button onClick={handleCancel}>cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <button
                  style={{ margin: "2px" }}
                  onClick={() => handleUpdate(todo.id)}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
