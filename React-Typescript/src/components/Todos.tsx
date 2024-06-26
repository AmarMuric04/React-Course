import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.todos.map((item) => (
        <TodoItem todo={item} />
      ))}
    </ul>
  );
};

export default Todos;
