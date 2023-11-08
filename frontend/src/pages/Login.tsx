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
import { InputsRegisterAndLogin } from "./Register";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../api";
import accessToken from "../utils/accessToken";

type ResponseLogin = {
  token: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<InputsRegisterAndLogin>();
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<InputsRegisterAndLogin> = async (data) => {
    setIsLoading(true);
    toast.remove();

    try {
      const registerUser = api.post<ResponseLogin>("/users/login", data);
      const {
        data: { token },
      } = await toast.promise(registerUser, {
        loading: "Realizando o Login",
        success: "Usuario Logado com sucesso",
        error: "Senha ou e-mail incorretos",
      });
      accessToken.setToken(token);
      navigate("/");
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
          Login
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexFlow: "column",
            gap: "14px",
          }}
          component="form"
          onSubmit={handleSubmit(handleLogin)}
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
            Entrar
          </Button>
          <Button href="/register" disabled={isLoading}>
            Registrar-ser
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
