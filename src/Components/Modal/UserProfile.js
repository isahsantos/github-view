import React from "react"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import '../../assets/style/UserProfile.css'
function userProfile (props) {
 
var userProfile = props.result;
        console.log("Props", props)
        console.log("Result",props.result)

  
      return( <>
      <Card className="profile-card">
          
      <CardActionArea>
        <CardMedia
          image={userProfile.avatar_url}
          alt="User Perfil"
        />
        <CardContent>
        <img src={userProfile.avatar_url}  width="90rem" height="90rem"/>
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
        <Button target="__blank" size="small"  color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
    </>
      )
}
export default userProfile;