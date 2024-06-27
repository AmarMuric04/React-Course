import Todo from "../models/todo";
import { useState } from "react";
import React from "react";

type TodosContextObj = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodoText: string) =>
    setTodos((prevTodos: Todo[]) => prevTodos.concat(new Todo(newTodoText)));

  const removeTodo = (id: string) =>
    setTodos((prevTodos: Todo[]) => prevTodos.filter((item) => item.id !== id));

  const ctxValue: TodosContextObj = {
    todos,
    addTodo,
    removeTodo,
  };

  return (
    <TodosContext.Provider value={ctxValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
