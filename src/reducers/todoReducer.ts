import { TodoState, TodoAction } from "../Types/todoTypes";
import { updateTodo } from "../actions/todoActions";
import {
  ADD_TODO,
  DELETE_TODO,
  LOAD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../constants/todoConstants";

const initialState: TodoState = {
  todos: [],
};

const todoReducers = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      localStorage.setItem("todos", JSON.stringify([...state.todos, newTodo]));
      return {
        todos: [...state.todos, newTodo],
      };

    case TOGGLE_TODO:
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return {
        todos: newTodos,
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem("todos", JSON.stringify(filteredTodos));
      return {
        todos: filteredTodos,
      };
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return {
        todos: updatedTodos,
      };

    case LOAD_TODO:
      return {
        todos: action.payload.todos,
      };
    default:
      return state;
  }
};
export default todoReducers;
