"use client";

import Btn from "../Btn";
import Input from "../Input";
import { useState } from "react";

export default function EditToDoList({ list, allTodos, setAllTodos }) {
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
    <div>
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
    </div>
  );
}
