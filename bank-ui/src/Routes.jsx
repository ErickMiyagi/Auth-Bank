import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login/index";
import Register from "./pages/register/index"
import Menu from "./pages/menu/index";

const ProjectRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element = { <Login/> }  path="/login" exact />
        <Route element = { <Register/> }  path="/register" />
        <Route element = {<Navigate to="/login" />} path="/" />
        <Route element = {<Menu/>} path="/menu"></Route>
      </Routes> 
     </BrowserRouter>
  )
} 
export default ProjectRoutes