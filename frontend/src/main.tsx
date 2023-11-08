import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
          }}
        />
        <AllRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
