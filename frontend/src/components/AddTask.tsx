import { AddTaskOutlined } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../api";
import toast from "react-hot-toast";
import { Task } from "../types/Task";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

type InputProps = {
  content: string;
};

const AddTask = () => {
  const { register, handleSubmit } = useForm<InputProps>();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation<AxiosResponse<Task>, Error, InputProps>({
    mutationFn: (data) => api.post<Task>("/tasks", data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const onSubmit: SubmitHandler<InputProps> = async (data) => {
    await toast.promise(mutateAsync(data), {
      success: "Nova tarefa adicionada",
      loading: "Adicionando a tarefa",
      error: "Erro ao adicionar a nova tarefa",
    });
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
