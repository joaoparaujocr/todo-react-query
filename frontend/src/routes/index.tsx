import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Register from "../pages/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
