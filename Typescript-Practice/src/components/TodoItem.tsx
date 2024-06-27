import React, { useContext } from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <li className={classes.item} key={props.todo.id}>
      <p>{props.todo.text}</p>
      <button onClick={() => todosCtx.removeTodo(props.todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
