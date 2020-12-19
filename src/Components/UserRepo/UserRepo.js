import React, { useState} from "react";
import { getRepoByUser } from "../../services/GithubUsers";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
export default function UserRepo(props){
    const [repo, setRepo] = useState([]);
    console.log("Props Repo", props.result)
   

    getRepoByUser(repo).then((repo) => {
        setRepo(repo);
        console.log("Repo User repo =>", repo);
      });



return(
    <>
  <Card className="profile-card">
          
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
            trtrtrt
              </Typography>
              <Typography component="p"></Typography>
              <br />
              <Typography component="p">
                Seguindo: 
              </Typography>
              <Typography component="p">
                Seguidores: 
              </Typography>
              <Typography component="p">
                Repositórios: 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card>
    </>
)




}