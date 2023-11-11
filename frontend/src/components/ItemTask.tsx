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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const ItemTask = ({ content, checked, id }: Task) => {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncRemove } = useMutation<
    AxiosResponse,
    Error,
    number
  >({
    mutationFn: (id) => api.delete(`/tasks/${id}`),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutateAsync: mutateAsyncChecked } = useMutation<
    AxiosResponse,
    Error,
    { id: number }
  >({
    mutationFn: ({ id }) => api.patch(`/tasks/${id}/checked`),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const removeTask = async (id: number) => {
    await toast.promise(mutateAsyncRemove(id), {
      success: "Tarefa removida com sucesso",
      loading: "Removendo tarefa",
      error: "Não foi possivel remover a tarefa",
    });
  };

  const checkedTask = async ({ id, checked }: Pick<Task, "checked" | "id">) => {
    if (checked) {
      return toast.error("Tarefa já concluida");
    }

    await toast.promise(mutateAsyncChecked({ id }), {
      error: "Erro ao concluir a tarefa",
      loading: "Adicionando a tarefa como concluida",
      success: "Tarefa conluida",
    });
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
