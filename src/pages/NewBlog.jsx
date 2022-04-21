import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import LogoBlog from "../assets/logoblog.png";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { AddBlog } from "../helpers/functions";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

function NewBlog() {
  const navigate = useNavigate();
  const { blog, setBlog, currentUser } = useContext(AppContext);
  const handleChange = (e) => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    e.preventDefault();
    const CurUser = currentUser.email;
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
      user: CurUser,
      date: `${day}-${month + 1}-${year}`,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(blog);
    navigate("/");
    setBlog({ [e.target.name]: "" });
  };
  console.log(blog);
  return (
    <div className="newblog">
      {currentUser ? (
        <>
          <img src={LogoBlog} alt="" style={{ width: "150px" }} />
          <h1>----New Blog----</h1>
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: "40%", margin: "auto" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    placeholder="Title"
                    multiline
                    required
                    style={{ width: "100%" }}
                    name="title"
                    value={blog.title}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="İmage Url"
                    placeholder="İmage Url"
                    multiline
                    required
                    style={{ width: "100%" }}
                    name="imageUrl"
                    value={blog.imageUrl}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Content"
                    multiline
                    rows={15}
                    required
                    style={{ width: "100%" }}
                    name="content"
                    value={blog.content}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="success" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default NewBlog;
