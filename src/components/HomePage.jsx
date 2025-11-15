import React, { useState } from "react";

import Btn from "./Btn";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import Input from "./Input";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [Tasklist, setTaskList] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "") {
      setTaskList([...Tasklist, { title: trimmedValue, done: false }]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setTaskList(Tasklist.filter((_, i) => i !== index));
  };

  const toggleCheck = (index) => {
    const newList = [...Tasklist];

    // اجازه فقط یک‌بار تیک خوردن
    if (!newList[index].done) {
      newList[index].done = true;
    }

    setTaskList(newList);
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {/* Input + Button */}
      <div className="flex items-center justify-center gap-10 w-full px-4 py-2 shadow-md">
        <Input onChange={handleChange} value={inputValue} />
        <Btn onClick={addTask} />
      </div>

      {/* Task List */}
      {Tasklist.map((task, index) => (
        <div
          key={index}
          className={`flex items-center justify-between border-b-2 border-blue-400 py-5 px-10 w-full
          ${task.done ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span
            className={`flex gap-10 text-2xl font-bold text-blue-900 
            ${task.done ? "line-through text-gray-500" : ""}`}
          >
            <Checkbox
              checked={task.done}
              onChange={() => toggleCheck(index)}
              disabled={task.done} // چک‌باکس بعد از تیک شدن غیرفعال می‌شود
            />

            <span>Title:</span>
            <span className="font-semibold text-blue-400">{task.title}</span>
          </span>

          <DeleteIcon
            onClick={() => handleDelete(index)}
            sx={{ color: "blue", fontSize: 30, cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
