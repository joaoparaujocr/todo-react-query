import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Task } from "../types/Task";
import { DeleteOutline, Edit } from "@mui/icons-material";
import api from "../api";
import toast from "react-hot-toast";
import { useDashboard } from "../hooks/useDashboard";

const ItemTask = ({ content, checked, id }: Task) => {
  const { updateTasks } = useDashboard();

  const removeTask = async (id: number) => {
    try {
      toast.remove();
      const fetchDeleteTask = api.delete(`/tasks/${id}`);
      await toast.promise(fetchDeleteTask, {
        error: "Erro ao tentar remover a tarefa",
        loading: "Removendo tarefa",
        success: "Tarefa removida com sucesso",
      });
      updateTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const checkedTask = async ({ id, checked }: Pick<Task, "checked" | "id">) => {
    toast.remove();
    if (checked) {
      toast.error("Essa tarefa já está como concluida");
      return;
    }

    try {
      const fetchCheckedTask = api.patch(`/tasks/${id}/checked`);
      await toast.promise(fetchCheckedTask, {
        error: "Erro ao concluir a tarefa",
        loading: "Adicionando a tarefa como concluida",
        success: "Tarefa conluida",
      });
      updateTasks();
    } catch {
      console.log(console.error());
    }
  };

  return (
    <ListItem
      sx={{
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
      secondaryAction={
        <>
          <IconButton>
            <Edit color="info" />
          </IconButton>
          <IconButton
            onClick={() => removeTask(id)}
            sx={{
              borderRadius: "50%",
            }}
          >
            <DeleteOutline color="error" />
          </IconButton>
        </>
      }
    >
      <ListItemIcon onClick={() => checkedTask({ id, checked })}>
        <Checkbox checked={checked} />
      </ListItemIcon>
      <ListItemText
        sx={{
          color: "gray",
        }}
      >
        {content}
      </ListItemText>
    </ListItem>
  );
};

export { ItemTask };
