import "./App.css";
import { Navbar } from "./components/Navbar";
import { Loading } from "./components/Loading";
import { ListTasks } from "./components/ListTasks";
import { AddTask } from "./components/AddTask";
import { Box } from "@mui/material";
import { useDashboard } from "./hooks/useDashboard";

function App() {
  const { isLoadingTasks, tasks } = useDashboard();

  if (isLoadingTasks) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px 10px",
        }}
      >
        <AddTask />
        <ListTasks tasks={tasks} />
      </Box>
    </>
  );
}

export default App;
