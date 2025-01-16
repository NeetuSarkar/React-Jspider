import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Task7.css";

const Task7 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

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

  //function to update todo
  function updateTodo(index) {
    setToggle(false);
    const task = todos[index];
    setTodo(task);
    setEditIndex(index);
  }

  //function to add the updated todo
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
    <div className="container">
      <h2>ToDoList</h2>

      <div className="taskInput">
        <input
          type="text"
          placeholder="Enter Task"
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
            {task}
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

export default Task7;
