import Button from "@mui/material/Button";

export default function YourProjects({
  projects,
  changePageToProject,
  changePageToAddProject,
}) {
  return (
    <section id="your-projects">
      <h1>Your projects</h1>
      <Button
        onClick={changePageToAddProject}
        id="add-project-button"
        variant="outlined"
      >
        + Add Project
      </Button>

      {projects.length !== 0 ? (
        <div id="projects-list-container">
          <p>Your current projects: </p>
          <ul id="projects-list">
            {projects.map((project, i) => (
              <li onClick={changePageToProject.bind(null, project, i)} key={i}>
                {project.title}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You don't have any projects, add some!</p>
      )}
    </section>
  );
}
