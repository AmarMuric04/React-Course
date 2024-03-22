import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";

export default function IndividualProject({
  title,
  date,
  description,
  tasks,
  addTask,
  removeTask,
}) {
  const [newTaskInput, setNewTaskInput] = useState("");
  const [newTaskInputError, setNewTaskInputError] = useState(false);

  function handleTaskChange(event) {
    setNewTaskInput(
      (prevNewTaskInput) => (prevNewTaskInput = event.target.value)
    );
  }

  function handleAddTask() {
    if (!newTaskInput)
      setNewTaskInputError((prevNewTaskInputError) => !prevNewTaskInputError);
    else {
      addTask(newTaskInput);
      setNewTaskInput("");
    }
  }

  function handleRemoveTask(index) {
    tasks.splice(index, 1);
    removeTask(tasks);
  }

  return (
    <section id="project">
      <div id="project-title-container">
        <h1>{title}</h1>
        <Button id="delete-project-button" variant="outlined">
          Delete
        </Button>
      </div>
      <span id="project-date">{date}</span>
      <p id="project-description">{description}</p>

      <div id="task-container">
        <h1>Tasks</h1>
        <div id="add-task-container">
          <TextField
            error={newTaskInputError}
            onChange={handleTaskChange}
            helperText={newTaskInputError ? "Incorrect entry." : null}
            id="filled-basic"
            label="I'd like to..."
            variant="filled"
            value={newTaskInput}
          />
          <Button
            onClick={handleAddTask}
            id="add-task-button"
            variant="outlined"
          >
            Add task
          </Button>
        </div>

        {tasks.length === 0 ? (
          <p>You don't have any tasks right now...</p>
        ) : (
          <ul id="tasks-list">
            {tasks.map((task, i) => (
              <div id="task-wrapper" key={i}>
                <li>{task}</li>
                <Button
                  id="remove-task-button"
                  variant="outlined"
                  onClick={handleRemoveTask.bind(null, i)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
