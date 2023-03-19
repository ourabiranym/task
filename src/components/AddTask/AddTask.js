import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AddTask.css";
import { handleAdd } from "react-bootstrap";
const AddTask = () => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="add task">
      <input type="text" placeholder="Enter the task youwant to add" />
      onChange={handleChange}
      <Button variant="secondary">Add Task</Button>
    </div>
  );
};

export default AddTask;
