import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import api from "./api";
import { Task } from "./types/Task";
import { Loading } from "./components/Loading";
import { ListTasks } from "./components/ListTasks";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>();

  const fetchAllTasks = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data: dataTasks } = await api.get<Task[]>("/tasks");
      setTasks(dataTasks);
      setIsLoading(false);
    } catch {
      console.error("Erro ao buscar as tasks");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <ListTasks tasks={tasks} />
    </>
  );
}

export default App;
