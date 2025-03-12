import React, { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task 1", "Task 2", "Task 3"];

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const hideButton = false;
  const styles = {
    backgroundColor: "red",
  };

  return (
    <>
      <h1 style={styles}> Tasks {count}</h1>
      <input type="text" onChange={handleChange}></input>
      <button
        onClick={handleClick}
        className="btn"
        disabled={hideButton}
        value="Add Task Button"
      >
        Add Task
      </button>
      <h1>{input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;
