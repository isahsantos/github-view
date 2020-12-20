import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FolderIcon from "@material-ui/icons/Folder";
import StarsIcon from "@material-ui/icons/Stars";
import UserRepoStarred from "../UserStarred/UserStarred";
import FaceIcon from "@material-ui/icons/Face";
import Repo from "../UserRepo/UserRepo";
import "../../assets/style/UserProfile.css";

export default function UserProfile(props) {
  var userProfile = props.result;
  var [listRepo, setListRepo] = useState(false);
  var [listStarred, setListStarred] = useState(false);
  function handleChange() {
    setListRepo((open) => !open);
  }
  function handleChangeStarred() {
    setListStarred((open) => !open);
  }
  return (
    <>
      <Card className="profile-card">
        <CardActionArea>
          <CardContent>
            <img
              src={userProfile.avatar_url}
              className="image-round"
              alt="profile"
            />
            <Typography gutterBottom variant="h5" component="h2">
              {userProfile.name}
            </Typography>
            <Typography>
              <FaceIcon className="icone" />
              <Button href={userProfile.html_url} color="primary">
                Ver Perfil
              </Button>
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
            style={{ backgroundColor: "#613dc1", color: "white", margin: 15 }}
            onClick={handleChange}
            onChange={() => setListRepo(true)}
            startIcon={<FolderIcon />}
          >
            Repositórios
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="subimit"
            style={{ backgroundColor: "#613dc1", color: "white" }}
            onClick={handleChangeStarred}
            startIcon={<StarsIcon />}
          >
            Favoritos
          </Button>
        </CardActions>
      </Card>
      {listRepo && <Repo open={listRepo} result={userProfile.login} />}
      {listStarred && (
        <UserRepoStarred open={listStarred} result={userProfile.login} />
      )}
    </>
  );
}
