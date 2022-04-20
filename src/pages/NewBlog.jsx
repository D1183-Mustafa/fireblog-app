import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import LogoBlog from "../assets/logoblog.png"
function NewBlog() {
  return (
    <div className="newblog">
        <img src={LogoBlog} alt="" style={{width:"150px"}}/>
        <h1>----New Blog----</h1>
      <form action="">
        <Box sx={{ width: "40%", margin: "auto" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <TextField label="Title" placeholder="Title" multiline required style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="İmage Url" placeholder="İmage Url" multiline required style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Content" multiline rows={15} required style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default NewBlog;
