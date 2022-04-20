import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import LoginAlert from "./LoginAlert";


function Dashboard() {
  const { currentUser } = useContext(AppContext);
  console.log(currentUser);
  return <div>{currentUser && <LoginAlert /> }</div>;
}

export default Dashboard;
