import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";

function AppRouter() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>   
        <Route path="/newblog" element={<NewBlog/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/updateblog" element={<UpdateBlog/>}/>


      </Routes>
    </Router>
  );
}

export default AppRouter;
