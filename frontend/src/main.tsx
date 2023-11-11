import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { DashboardProvider } from "./context/DashboardContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <BrowserRouter>
        <AuthProvider>
          <DashboardProvider>
            <ThemeProvider theme={customTheme}>
              <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                  duration: 5000,
                }}
              />
              <AllRoutes />
            </ThemeProvider>
          </DashboardProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
