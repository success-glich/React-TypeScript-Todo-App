import { TodoAction } from "../Types/todoTypes";
import {
  ADD_TODO,
  DELETE_TODO,
  LOAD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../constants/todoConstants";

export const addTodo = (text: string): TodoAction => {
  return {
    type: ADD_TODO,
    payload: { text },
  };
};

export const toggleTodo = (id: number): TodoAction => ({
  type: TOGGLE_TODO,
  payload: { id },
});
export const updateTodo = (id: number, text: string): TodoAction => ({
  type: UPDATE_TODO,
  payload: { id, text },
});

export const deleteTodo = (id: number): TodoAction => ({
  type: DELETE_TODO,
  payload: { id },
});
export const loadTodo = (todos: number[]) => ({
  type: LOAD_TODO,
  payload: { todos },
});
