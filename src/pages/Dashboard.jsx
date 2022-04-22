import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import LoginAlert from "./LoginAlert";
import "./Login.css";
import { useFetch } from "../helpers/functions";
import BlogForm from "../components/BlogForm";
import Container from "@mui/material/Container";
function Dashboard() {
  const { currentUser } = useContext(AppContext);
  const { databaseBlog } = useFetch();
  console.log(databaseBlog);
  return (
    <div>
      <Container>
        {currentUser && <LoginAlert />}
        <h1>────DASHBOARD────</h1>
        <BlogForm databaseBlog={databaseBlog} />
      </Container>
    </div>
  );
}

export default Dashboard;
