import React, {useState} from "react"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import Repo from '../UserRepo/UserRepo'
import '../../assets/style/UserProfile.css'

export default function UserProfile (props) {
 
var userProfile = props.result;
var  [list,setList] = useState(false);
console.log("Set List", list)
      return( <>
      <Card className="profile-card">
          
      <CardActionArea>
        <CardContent>
        <img src={userProfile.avatar_url} alt="description of image"  width="90rem" height="90rem"/>
          <Typography gutterBottom variant="h5" component="h2">
            {userProfile.name}
          </Typography>
          <Typography component="p">{userProfile.bio}</Typography>
          <br />
          <Typography component="p">
            Seguindo: {userProfile.following}
          </Typography>
          <Typography component="p">
            Seguidores: {userProfile.followers}
          </Typography>
          <Typography component="p">
            Repositórios: {userProfile.public_repos}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
        variant="contained"
        color="primary"
        size="small"
        type="subimit"
        onClick={() => setList(true)}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>

      </CardActions>
   
    </Card>
    { list ? <Repo result= {userProfile.login} /> : null }
    </>
      )
}
