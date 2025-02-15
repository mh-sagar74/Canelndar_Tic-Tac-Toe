"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";
import InputForm from "./InputForm";
import ToDoList from "./ToDoList";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (todo) {
      setAllTodos((pre) => {
        return [...pre, { task: todo, key: uuidv4(), isEdit: false }];
      });
    }
    setTodo("");
  };

  return (
    <div>
      <Box>
        <InputForm handleAddBtn={handleAddBtn} todo={todo} setTodo={setTodo} />
        <ToDoList allTodos={allTodos} setAllTodos={setAllTodos} />
      </Box>
    </div>
  );
}
