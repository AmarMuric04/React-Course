import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";

import NoProjects from "./components/NoProjects";
import YourProjects from "./components/YourProjects";
import AddProject from "./components/AddProject";
import IndividualProject from "./components/IndividualProject";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "First project",
      description: "",
      date: "",
      tasks: [],
    },
  ]);

  const [activeProject, setActiveProject] = useState({});
  const [indexOfActiveProject, setIndexOfActiveProject] = useState();

  const [projectPage, setProjectPage] = useState(false);
  const [addProjectPage, setAddProjectPage] = useState(false);
  const [noProjectsPage, setNoProjectsPage] = useState(true);

  function handleProjectsChange(newProjects) {
    setProjects(newProjects);
  }

  function changeToNoProjectPage() {
    setNoProjectsPage(true);
    setAddProjectPage(false);
    setProjectPage(false);
  }

  function changeToAddPage() {
    setNoProjectsPage(false);
    setAddProjectPage(true);
    setProjectPage(false);
  }

  function changeToProjectPage(project, index) {
    setNoProjectsPage(false);
    setAddProjectPage(false);

    setActiveProject((prevActiveProject) => (prevActiveProject = project));
    setIndexOfActiveProject(
      (prevIndexOfACtiveProject) => (prevIndexOfACtiveProject = index)
    );
    setProjectPage(true);
  }

  function handleAddProject(newProject) {
    setProjects((prevProjects) => (prevProjects = [...projects, newProject]));
  }

  function handleAddTask(newTask) {
    setTasks((prevTasks) => (prevTasks = [...tasks, newTask]));
  }

  function handleRemoveTask(newTasks) {
    console.log(newTasks);
    setTasks((prevTasks) => (prevTasks = [...newTasks]));
  }

  return (
    <>
      <main>
        <YourProjects
          changePageToAddProject={changeToAddPage}
          changePageToProject={changeToProjectPage}
          projects={projects}
        />
        {projectPage && (
          <IndividualProject
            changeProjects={handleProjectsChange}
            project={activeProject}
            indexOfProject={indexOfActiveProject}
            projects={projects}
            addTask={handleAddTask}
            removeTask={handleRemoveTask}
            changePage={changeToNoProjectPage}
          />
        )}
        {addProjectPage && (
          <AddProject
            addProject={handleAddProject}
            projects={projects}
            changePage={changeToNoProjectPage}
          />
        )}
        {noProjectsPage && (
          <NoProjects projects={projects} changePage={changeToAddPage} />
        )}
      </main>
    </>
  );
}

export default App;
