import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import ProjectDisplay from "./components/ProjectDisplay";
import ProjectsCards from "./components/ProjectsCards";
import ToggleButton from "./components/ToggleButton";
import InputField from "./components/InputField";
import Weather from "./components/Weather";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "counter",
      title: "Counter",
      projectImage:
        "https://ziontutorial.com/wp-content/uploads/2022/12/Desktop-4.jpg",
      component: <Counter />,
    },
    {
      id: "toggleButton",
      title: "Toggle-Button",
      projectImage:
        "https://i.pinimg.com/236x/1e/92/af/1e92afcd047222816988f7635ed1f6ba.jpg",
      component: <ToggleButton />,
    },
    {
      id: "InputField",
      title: "InputField",
      projectImage: "https://i.ytimg.com/vi/XtS14dXwvwE/maxresdefault.jpg",
      component: <InputField />,
    },
    {
      id: "Weather App",
      title: "WeatherApp",
      projectImage:
        "https://cdn.dribbble.com/users/1058778/screenshots/2577923/weather_app_-_dribbble.png",
      component: <Weather />,
    },
  ];

  return (
    <div>
      <Navbar onProjectsClick={() => setSelectedProject(null)} />
      {selectedProject ? (
        <div className="container">{selectedProject}</div> // Show only the selected project
      ) : (
        <ProjectsCards
          projects={projects}
          setSelectedProject={setSelectedProject}
        />
      )}
    </div>
  );
}

export default App;
