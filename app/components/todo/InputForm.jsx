import Btn from "../Btn";
import Input from "../Input";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

export default function InputForm({ handleAddBtn, todo, setTodo }) {
  return (
    <div>
      <form onSubmit={handleAddBtn} className="flex justify-center mt-5 mb-5">
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          label="Add Todo"
        />
        <Btn
          clickEvent={handleAddBtn}
          icon={<AddCircleRoundedIcon fontSize="large" />}
        />
      </form>
    </div>
  );
}
