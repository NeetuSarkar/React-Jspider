import "./App.css";
import FunctionProps from "./FunctionProps";
import Header from "./Header";

function App() {
  return (
    <div>
      <h1>APP compoenent</h1>
      <FunctionProps name="Neetu">
        {"IT'S A CHILDREN PROPS"}
        {<h1>Hello from Neetu</h1>}
        {<Header />}
      </FunctionProps>
    </div>
  );
}

export default App;
