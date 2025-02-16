import Card from "@mui/material/Card";
import Btn from "../Btn";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import EditToDoList from "./EditToDoList";
import { Box } from "@mui/material";

export default function ToDoList({ allTodos, setAllTodos }) {
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
    <Box>
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
          <EditToDoList
            list={list}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
          />
        </Card>
      ))}
    </Box>
  );
}
