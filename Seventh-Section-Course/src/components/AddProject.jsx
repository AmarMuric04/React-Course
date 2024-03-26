import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState, useRef } from "react";

export default function AddPage({ addProject, projects, changePage }) {
  const [titleInput, setTitleInput] = useState("");
  const [titleInputError, setTitleInputError] = useState(false);

  const [descriptionInput, setDescriptionInput] = useState("");
  const [descriptionInputError, setDescriptionInputError] = useState(false);

  const [dateInput, setDateInput] = useState("");
  const [dateInputError, setDateInputError] = useState(false);

  let errorTimeout = useRef();

  function handleTitleChange(event) {
    setTitleInput(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescriptionInput(event.target.value);
  }

  function handleDateChange(event) {
    setDateInput(event.target.value);
  }

  function handleSubmitClick() {
    clearTimeout(errorTimeout.current);

    if (!titleInput) setTitleInputError(true);
    if (!descriptionInput) setDescriptionInputError(true);
    if (!dateInput) setDateInputError(true);

    errorTimeout.current = setTimeout(() => {
      setTitleInputError(false);
      setDescriptionInputError(false);
      setDateInputError(false);
    }, 1500);

    if (titleInput && descriptionInput && dateInput) {
      addProject({
        title: titleInput,
        description: descriptionInput,
        date: dateInput,
        tasks: [],
      });

      setTitleInput("");
      setDescriptionInput("");
      setDateInput("");
    }
  }

  return (
    <section id="add-projects">
      <section id="add-projects-container">
        <div id="add-projects-buttons">
          <Button
            onClick={changePage}
            id="add-projects-cancel"
            className="add-project-page-button"
          >
            CANCEL
          </Button>
          <Button
            onClick={handleSubmitClick}
            id="add-projects-save"
            className="add-project-page-button"
          >
            SAVE
          </Button>
        </div>
        <div className="input-label-group normal-input">
          <TextField
            error={titleInputError}
            onChange={handleTitleChange}
            helperText={titleInputError ? "Incorrect entry." : null}
            id="filled-basic"
            label="TITLE"
            variant="filled"
            value={titleInput}
          />
        </div>
        <div className="input-label-group">
          <TextField
            error={descriptionInputError}
            onChange={handleDescriptionChange}
            helperText={descriptionInputError ? "Incorrect entry." : null}
            id="filled-multiline-static"
            label="DESCRIPTION"
            multiline
            rows={4}
            variant="filled"
            value={descriptionInput}
          />
        </div>
        <div className="input-label-group  normal-input">
          <TextField
            error={dateInputError}
            onChange={handleDateChange}
            helperText={dateInputError ? "Incorrect entry." : null}
            id="filled-basic"
            label="DUE DATE"
            variant="filled"
            value={dateInput}
          />
        </div>
      </section>
    </section>
  );
}
