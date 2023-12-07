import { createContext} from "react";
import { Task } from "../types/Task";
import api from "../api";
import { useQuery } from "@tanstack/react-query";

type DashboardContextValues = {
  tasks: Task[] | undefined;
  isLoadingTasks: boolean;
};

type DashboardProviderProps = {
  children: React.ReactNode;
};

export const DashboardContext = createContext({} as DashboardContextValues);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => api.get<Task[]>("/tasks"),
  });

  return (
    <DashboardContext.Provider
      value={{ isLoadingTasks: isLoading, tasks: data?.data }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
