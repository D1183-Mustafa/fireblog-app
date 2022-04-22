import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";

function BlogCard({item}) {
  const {currentUser} = React.useContext(AppContext)
  const navigate = useNavigate()
    console.log(item);
    const content = (item.content).slice(0,100) + "...";
    
    console.log(content);

    const handleClick = () =>{
      currentUser ? navigate(`/detail/${item.id}`, {state: { item }}) : navigate("/login")
      
    }
  return (
    <Card sx={{ maxWidth: 345,margin:"auto" }} >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={item.imageUrl}
          alt={item.title}
          sx={{width:200,margin:"auto"}}
        />
        <CardContent sx={{backgroundColor:"#FFF6EA"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"'Girassol', cursive" ,color:"#046482"}}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {item.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {(item.content.length) > 100 ? (content) : (item.content) }
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography sx={{display:"flex",justifyContent:"flex-start", alignItems:"center",gap:"10px",marginBottom:"2rem"}}>
      <AccountCircleIcon/>{item.user}
      </Typography>
      <Typography sx={{display:"flex",justifyContent:"flex-start", alignItems:"center",gap:"10px"}}>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
      <IconButton>
        <ChatBubbleOutlineIcon />
      </IconButton>
      </Typography>

    </Card>
  );
}

export default BlogCard;
