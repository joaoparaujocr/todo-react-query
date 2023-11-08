import { createContext, useContext, useEffect, useState } from "react";
import accessToken from "../utils/accessToken";
import api from "../api";

type UserAuth = {
  id: string;
  email: string;
};

type AuthContextValues = {
  user: UserAuth | undefined;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserAuth>();
  const token = accessToken.getToken();
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.post<UserAuth>("/users/token");
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
