"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";
import InputForm from "./InputForm";
import ToDoList from "./ToDoList";
import LoadingPage from "@/app/loading";

const getLocalStorage = () => {
  const list =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("storedTodos"))
      : false;
  if (list) {
    return JSON.parse(localStorage.getItem("storedTodos"));
  } else {
    return [];
  }
};

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(getLocalStorage());
  const [isLoading, setIsLoading] = useState(false);

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (todo) {
      setAllTodos((pre) => {
        return [...pre, { task: todo, key: uuidv4(), isEdit: false }];
      });
    }
    setTodo("");
  };

  useEffect(() => {
    typeof window !== "undefined"
      ? localStorage.setItem("storedTodos", JSON.stringify(allTodos))
      : false;
  }, [allTodos]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) {
    return <LoadingPage />;
  }

  return (
    <Box>
      <InputForm handleAddBtn={handleAddBtn} todo={todo} setTodo={setTodo} />
      <ToDoList allTodos={allTodos} setAllTodos={setAllTodos} />
    </Box>
  );
}
