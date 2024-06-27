import React, { useContext } from "react";
import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;
    if (!enteredText.trim()) throw new Error("BOOYAKASHAAAAAA");

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInput} type="text" name="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
