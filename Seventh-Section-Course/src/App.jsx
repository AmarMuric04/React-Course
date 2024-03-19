import TextField from "@mui/material/TextField";

function App() {
  return (
    <>
      <main>
        <section id="your-projects">
          <h1>Your projects</h1>
          <button id="add-project-button">+ Add Project</button>
        </section>
        <section id="add-project-page">
          <div id="add-project-page-buttons">
            <button className="cancel-button">Cancel</button>
            <button className="save-button">Save</button>
          </div>
          <TextField id="filled-basic" label="TITLE" variant="filled" />{" "}
          <TextField
            id="filled-multiline-static"
            label="DESCRIPTION"
            multiline
            rows={4}
            variant="filled"
          />
        </section>
      </main>
    </>
  );
}

export default App;
