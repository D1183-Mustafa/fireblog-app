import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import LogoPng from "../assets/logologo.png";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import { cikis } from "../helpers/firebase";

export default function Navbar() {
  const { currentUser } = React.useContext(AppContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ClickLogin = () => {
    navigate("/login");
    setAnchorEl(null);
  };

  const ClickRegister = () => {
    navigate("/register");
    setAnchorEl(null);
  };
  const ClickProfile = () => {
    navigate("/profile");
    setAnchorEl(null);
  };
  const ClickNewBlog = () => {
    navigate("/newblog");
    setAnchorEl(null);
  };
  const ClickLogOut = () => {
    cikis();
    navigate("/");
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#85C88A" }}>
          <Avatar
            alt="Remy Sharp"
            src={LogoPng}
            sx={{ width: 56, height: 56 ,cursor: "pointer"}}
            onClick={() => navigate("/")}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontFamily:"'Girassol', cursive",cursor: "pointer"}} onClick={() => navigate("/")}>
         {" ────<MustafaAltaş/> Blog ────"}
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {currentUser ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={ClickProfile}>Profile</MenuItem>
                <MenuItem onClick={ClickNewBlog}>New</MenuItem>
                <MenuItem onClick={ClickLogOut}>Logout</MenuItem>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={ClickLogin}>Login</MenuItem>
                <MenuItem onClick={ClickRegister}>Register</MenuItem>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
