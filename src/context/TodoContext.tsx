import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Todo } from "../Types/todoTypes";
import todoReducers from "../reducers/todoReducer";
// import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../constants/todoConstants";
import {
  addTodo,
  deleteTodo,
  loadTodo,
  toggleTodo,
  updateTodo,
} from "../actions/todoActions";

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}
type TodoProviderProps = {
  children: ReactNode;
};

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
});
const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducers, { todos: [] });
  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };
  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const handleUpdateTodo = (id: number, text: string) => {
    dispatch(updateTodo(id, text));
  };
  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };
  useEffect(() => {
    const loadTodos = localStorage.getItem("todos");
    const todos = loadTodos ? JSON.parse(loadTodos) : [];
    console.log(todos);
    dispatch(loadTodo(todos));
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo: handleAddTodo,
        toggleTodo: handleToggleTodo,
        deleteTodo: handleDeleteTodo,
        updateTodo: handleUpdateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const useTodo = () => {
  return useContext(TodoContext);
};

export default TodoProvider;
