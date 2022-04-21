import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import LoginAlert from "./LoginAlert";
import "./Login.css";
import {useFetch} from "../helpers/functions";
import BlogForm from "../components/BlogForm";
function Dashboard() {
  const { currentUser } = useContext(AppContext);
  const {databaseBlog} = useFetch()
  console.log(databaseBlog);
  return (
  <div>
    {currentUser && <LoginAlert />}
    <h1>----DASHBOARD----</h1>
    <BlogForm databaseBlog={databaseBlog}/>
  </div>);
}

export default Dashboard;
