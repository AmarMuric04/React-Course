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
  const [tasks, setTasks] = useState([
    "Eat hotdogs",
    "Eat sandwiches",
    "Eat a cheeseburger",
  ]);

  const [addProjectPage, setAddProjectPage] = useState(false);
  const [noProjectsPage, setNoProjectsPage] = useState(true);

  function changeToAddPage() {
    setNoProjectsPage((prevNoProjectsPage) => !prevNoProjectsPage);
    setAddProjectPage((prevAddProjectsPage) => !prevAddProjectsPage);
  }

  function changeToNoProjectPage() {
    setNoProjectsPage((prevNoProjectsPage) => !prevNoProjectsPage);
    setAddProjectPage((prevAddProjectsPage) => !prevAddProjectsPage);
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
        <YourProjects projects={projects} />
        <IndividualProject
          title="Learn react"
          description="Learn refs"
          date="24/12/2025"
          tasks={tasks}
          addTask={handleAddTask}
          removeTask={handleRemoveTask}
        />
        {/* {addProjectPage && (
          <AddProject
            addProject={handleAddProject}
            projects={projects}
            changePage={changeToNoProjectPage}
          />
        )}
        {noProjectsPage && (
          <NoProjects projects={projects} changePage={changeToAddPage} />
        )} */}
      </main>
    </>
  );
}

export default App;
