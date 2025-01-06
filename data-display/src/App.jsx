import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ObjectData from "./components/ObjectData";
import Task5 from "./components/Task5";
import Task6 from "./components/Task6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <ObjectData /> */}
      <Task6 />
    </div>
  );
}

export default App;
