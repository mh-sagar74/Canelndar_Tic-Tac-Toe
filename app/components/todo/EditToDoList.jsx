"use client";

import { Box } from "@mui/material";
import Btn from "../Btn";
import Input from "../Input";
import { useState } from "react";

export default function EditToDoList({ list, setAllTodos }) {
  const [editedItem, setEditedItem] = useState(list.task);

  const handleEditDoneBtn = (key) => {
    if (editedItem) {
      setAllTodos((pre) => {
        return pre.map((p) =>
          p.key === key ? { ...p, task: editedItem, isEdit: !p.isEdit } : p
        );
      });
    }
  };

  return (
    <Box>
      {list.isEdit ? (
        <span className="flex">
          <Input
            label="Edit Todo"
            value={editedItem}
            onChange={(e) => setEditedItem(e.target.value)}
          />
          <Btn clickEvent={() => handleEditDoneBtn(list.key)} />
        </span>
      ) : null}
    </Box>
  );
}
