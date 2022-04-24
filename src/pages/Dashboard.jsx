import "./Login.css";
import { useFetch } from "../helpers/functions";
import BlogForm from "../components/BlogForm";
import Container from "@mui/material/Container";
function Dashboard() {
  const { databaseBlog } = useFetch();
  console.log(databaseBlog);
  return (
    <div>
      <Container>
        <h1>────DASHBOARD────</h1>
        <BlogForm databaseBlog={databaseBlog} />
      </Container>
    </div>
  );
}

export default Dashboard;
