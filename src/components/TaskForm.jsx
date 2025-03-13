import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "", // the task is the name property of the input field
    status: "todo", // the status is the name property of the select field
  });

  // OLD WAY OF HANDLING INPUTS using multiple states
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");
  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };
  // console.log(task, status);
  ///////////////////////////////

  const handleChange = (e) => {
    const name = e.target.name; // name of the input or select
    const value = e.target.value; // value of the input or select
    // console.log(name, value);

    setTaskData((prev) => {
      return {
        // copy all existing properties of taskData using spread operator
        ...prev,
        // update the property with the name of the input/select to the new value
        // name is the name of the input or select (task/status), then we assign a value to the input/select (task/status)
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select
              name="status"
              id=""
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
