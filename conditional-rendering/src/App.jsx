import "./App.css";

function App() {
  let age = 20;
  return (
    <div>
      {/* ternary opearator */}
      {age >= 18 && <h1>Eligible to vote</h1>}
      {/* // Logical operators */}
      {age >= 18 && <p>Eligible to vote</p>}
    </div>
  );
}

export default App;
