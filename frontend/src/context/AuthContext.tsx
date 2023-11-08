import { createContext, useCallback, useEffect, useState } from "react";
import accessToken from "../utils/accessToken";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

type UserAuth = {
  id: string;
  email: string;
};

type AuthContextValues = {
  user: UserAuth | undefined;
  isFetching: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserAuth>();
  const [isFetching, setIsFetching] = useState(false);
  const token = accessToken.getToken();
  const navigate = useNavigate();

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const checkTokenAuth = useCallback(async () => {
    try {
      setIsFetching(true);
      const { data, status } = await api.post<UserAuth>("/users/token");

      if (status === 200) {
        setUser(data);
        navigate("/");
        return;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    checkTokenAuth();
  }, [checkTokenAuth, navigate, token]);

  return (
    <AuthContext.Provider value={{ user, isFetching }}>
      {isFetching ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
