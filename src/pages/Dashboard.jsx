import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import LoginAlert from "./LoginAlert";
import "./Login.css"
function Dashboard() {
  const { currentUser } = useContext(AppContext);
  console.log(currentUser);
  return (
  <div>
    {currentUser && <LoginAlert />}
    <h1>----DASHBOARD----</h1>
  </div>);
}

export default Dashboard;
