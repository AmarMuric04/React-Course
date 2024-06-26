import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{
  addTodo: (text: string) => void;
}> = (props) => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;
    if (!enteredText.trim()) throw new Error("BOOYAKASHAAAAAA");

    props.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInput} type="text" name="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
