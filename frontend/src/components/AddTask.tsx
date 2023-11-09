import { AddTaskOutlined } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../api";
import toast from "react-hot-toast";
import { Task } from "../types/Task";
import { useDashboard } from "../hooks/useDashboard";

type InputProps = {
  content: string;
};

const AddTask = () => {
  const { updateTasks } = useDashboard();
  const { register, handleSubmit } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = async (data) => {
    try {
      toast.remove();
      const fetchNewTask = api.post<Task>("/tasks", data);
      await toast.promise(fetchNewTask, {
        success: "Nova tarefa adicionada",
        loading: "Adicionando a tarefa",
        error: "Erro ao adicionar a nova tarefa",
      });
      await updateTasks();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
      }}
    >
      <TextField
        {...register("content")}
        id="standard-basic"
        label="Nova tarefa"
        variant="standard"
        sx={{
          width: "100%",
          marginBottom: "20px",
          "& .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-colorPrimary.MuiInputBase-formControl:before":
            {
              borderBottomColor: "#fff",
            },
        }}
        InputProps={{ sx: { color: "#fff" } }}
      />

      <IconButton type="submit" color="primary">
        <AddTaskOutlined />
      </IconButton>
    </Stack>
  );
};

export { AddTask };
