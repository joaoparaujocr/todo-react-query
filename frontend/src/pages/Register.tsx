import {
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export type InputsRegisterAndLogin = {
  email: string;
  password: string;
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<InputsRegisterAndLogin>();
  const navigate = useNavigate();

  const handleRegister: SubmitHandler<InputsRegisterAndLogin> = async (
    data
  ) => {
    toast.remove();
    setIsLoading(true);

    try {
      const registerUser = api.post("/users", data);
      await toast.promise(registerUser, {
        loading: "Realizando o cadastro",
        success: "Usuario cadastrado com sucesso",
        error: "Usuario já está cadastrado",
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h1" fontSize="30px">
          Registrar-se
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexFlow: "column",
            gap: "14px",
          }}
          component="form"
          onSubmit={handleSubmit(handleRegister)}
        >
          <TextField {...register("email")} inputMode="email" label="E-mail" />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              {...register("password")}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {!showPassword ? (
                      <VisibilityOff
                        sx={{
                          color: "#FFF",
                        }}
                      />
                    ) : (
                      <Visibility
                        sx={{
                          color: "#FFF",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button type="submit" variant="contained" disabled={isLoading}>
            Registrar-ser
          </Button>
          <Button type="button" href="/login" disabled={isLoading}>
            Entrar
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Register;
