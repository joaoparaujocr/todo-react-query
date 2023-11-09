import { List, Typography } from "@mui/material";
import { Task } from "../types/Task";
import { ItemTask } from "./ItemTask";

type ListTaskProps = {
  tasks: Task[] | undefined;
};

const ListTasks = ({ tasks }: ListTaskProps) => {
  if (!tasks) {
    return <Typography>Você não possui tasks</Typography>;
  }

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px 10px",
        gap: "20px",
      }}
    >
      {tasks.map((task) => (
        <ItemTask {...task} />
      ))}
    </List>
  );
};

export { ListTasks };
