import "./App.css";
import Header from "./conponent/Header.jsx";
import Icons from "./conponent/Icons.jsx";

function App() {
  return (
    <div id="container">
      <Header>
        <Icons />
      </Header>
      <div className="icons-list">
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
      </div>
    </div>
  );
}

export default App;
