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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
