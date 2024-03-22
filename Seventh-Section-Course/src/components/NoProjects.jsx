import Button from "@mui/material/Button";
import noProjectsImg from "../assets/no-projects.png";

export default function NoProjects({ changePage }) {
  return (
    <section id="no-project-section" className="right-section">
      <img id="no-project-image" src={noProjectsImg} alt="" />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button onClick={changePage} id="add-project-button" variant="outlined">
        Create new project
      </Button>
    </section>
  );
}
