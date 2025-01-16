import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to add a new todo item
  function addTodo() {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  // Function to delete a todo item
  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  // Function to update todo
  function updateTodo(index) {
    setToggle(false);
    const task = todos[index];
    setTodo(task);
    setEditIndex(index);
  }

  // Function to add the updated todo
  function updateTodoList() {
    if (todo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = todo;
      setTodos(updatedTodos);
      setToggle(true);
      setTodo("");
      setEditIndex(null);
    }
  }

  return (
    <div className={isDarkMode ? "container dark" : "container"}>
      {/* Pass the correct props */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="taskInput">
        <input
          type="text"
          placeholder="Enter Your Task Here...."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        {toggle ? (
          <button onClick={addTodo}>Add</button>
        ) : (
          <button onClick={updateTodoList}>Update</button>
        )}
      </div>

      <ul className="todos">
        {todos.map((task, index) => (
          <li className="todo" key={index}>
            <span>{task}</span>
            <div className="button-div">
              <button>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => {
                    updateTodo(index);
                  }}
                />
              </button>
              <button onClick={() => deleteTodo(index)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
