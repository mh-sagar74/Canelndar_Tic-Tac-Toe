// "use client";

import Card from "@mui/material/Card";
import Btn from "../Btn";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
// import Input from "../Input";
// import { useState } from "react";
import EditToDoList from "./EditToDoList";

export default function ToDoList({ allTodos, setAllTodos }) {
  // const [editedItem, setEditedItem] = useState(allTodos.task);

  const handleDltBtn = (key) => {
    const deletedItem = allTodos.filter((list) => key !== list.key);
    setAllTodos(deletedItem);
  };

  const handleEditBtn = (key) => {
    const editItem = allTodos.map((task) =>
      key === task.key ? { ...task, isEdit: !task.isEdit } : task
    );
    setAllTodos(editItem);
  };

  return (
    <div>
      {allTodos.map((list) => (
        <Card
          className="mt-5 m-auto"
          sx={{
            width: 500,
            paddingTop: 5,
            overflowWrap: "wrap",
            textAlign: "left",
            paddingLeft: 2,
            paddingRight: 2,
            backgroundColor: "#f8f9fa",
          }}
          key={list.key}>
          <span>{list.task}</span>
          <span className="flex justify-end gap-3">
            <Btn
              clickEvent={() => handleDltBtn(list.key)}
              icon={<DeleteRoundedIcon />}
            />
            <Btn
              clickEvent={() => handleEditBtn(list.key)}
              icon={<EditNoteRoundedIcon />}
            />
          </span>
          {/* {list.isEdit ? (
            <span className="flex">
              <Input
                value={editedItem}
                onChange={(e) => setEditedItem(e.target.value)}
              />
              <Btn />
            </span>
          ) : null} */}
          <EditToDoList
            list={list}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
          />
        </Card>
      ))}
    </div>
  );
}
