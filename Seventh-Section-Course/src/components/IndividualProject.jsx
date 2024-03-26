import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState, useRef } from "react";

export default function IndividualProject({
  project,
  projects,
  indexOfProject,
  changeProjects,
  changePage,
}) {
  const [newTaskInput, setNewTaskInput] = useState("");
  const [newTaskInputError, setNewTaskInputError] = useState(false);
  const [taskRemoved, setTaskRemoved] = useState(false);

  let errorTimeout = useRef();

  function handleTaskChange(event) {
    setNewTaskInput(
      (prevNewTaskInput) => (prevNewTaskInput = event.target.value)
    );
  }

  function handleRemoveProject() {
    projects.splice(indexOfProject, 1);

    changeProjects(projects);
    changePage();
  }

  function updateProjectTasks() {
    projects[indexOfProject] = project;

    changeProjects(projects);
    setNewTaskInput("");
  }

  function handleAddTask() {
    clearTimeout(errorTimeout.current);

    if (!newTaskInput) {
      setNewTaskInputError((prevNewTaskInputError) => true);

      errorTimeout.current = setTimeout(() => {
        setNewTaskInputError((prevNewTaskInputError) => false);
      }, 1500);
    } else {
      project.tasks.push(newTaskInput);

      updateProjectTasks();
    }
  }

  function handleRemoveTask(index) {
    project.tasks.splice(index, 1);

    setTaskRemoved((prevTaskRemoved) => !prevTaskRemoved);
    updateProjectTasks();
  }

  return (
    <section id="project">
      <div id="project-title-container">
        <h1>{project.title}</h1>
        <Button
          onClick={handleRemoveProject}
          id="delete-project-button"
          variant="outlined"
        >
          Delete
        </Button>
      </div>
      <span id="project-date">{project.date}</span>
      <p id="project-description">{project.description}</p>

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

        {project.tasks.length === 0 ? (
          <p>You don't have any tasks right now...</p>
        ) : (
          <ul id="tasks-list">
            {project.tasks.map((task, i) => (
              <div id="task-wrapper" key={i}>
                <li>{task}</li>
                <Button
                  onClick={handleRemoveTask.bind(null, i)}
                  id="remove-task-button"
                  variant="outlined"
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
