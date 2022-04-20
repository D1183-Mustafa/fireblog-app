import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import LoginAlert from "./LoginAlert";
import "./Login.css";
import {useFetch} from "../helpers/functions";
function Dashboard() {
  const { currentUser } = useContext(AppContext);
  const {databaseBlog} = useFetch()
  console.log(databaseBlog);
  return (
  <div>
    {currentUser && <LoginAlert />}
    <h1>----DASHBOARD----</h1>
  </div>);
}

export default Dashboard;
