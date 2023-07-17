export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}
export interface TodoAction {
  type: string;
  payload?: any;
}
