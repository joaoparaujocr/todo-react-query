import { createContext, useCallback, useEffect, useState } from "react";
import { Task } from "../types/Task";
import api from "../api";

type DashboardContextValues = {
  tasks: Task[] | undefined;
  updateTasks(): Promise<void>;
  isLoadingTasks: boolean;
};

type DashboardProviderProps = {
  children: React.ReactNode;
};

export const DashboardContext = createContext({} as DashboardContextValues);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchAllTasks = useCallback(async () => {
    try {
      const { data: dataTasks } = await api.get<Task[]>("/tasks");
      setTasks(dataTasks);
    } catch {
      console.error("Erro ao buscar as tasks");
    } finally {
      setIsLoadingTasks(false);
    }
  }, []);

  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);

  return (
    <DashboardContext.Provider
      value={{ isLoadingTasks, tasks, updateTasks: fetchAllTasks }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
