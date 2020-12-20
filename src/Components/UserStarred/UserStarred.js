import React, { useState, useEffect } from "react";
import { getRepoStarred } from "../../services/GithubUsers";
import { makeStyles } from "@material-ui/core/styles";
import StarsIcon from "@material-ui/icons/Stars";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import FolderIcon from "@material-ui/icons/Folder";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Slide from "@material-ui/core/Slide";
import "../../assets/style/UserRepo.css";
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "none",
  },
  appBar: {
    position: "relative",
    backgroundColor: "#613dc1",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  icones: {
    color: "#613dc1",
    alignContent: "center",
    fontSize: "17px",
    marginRight: "3px",
    marginBottom: "-3px",
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function UserRepoStarred(props) {
  var user = props.result;
  const [repositorie, setRepositories] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = useState(props.open);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getRepoStarred(user).then((repo) => {
      setRepositories(repo);
    });
  });
  var data = Array.from(repositorie);
  const body = (
    <div className="container">
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <Card className="card-repo">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography component="p">
                    <FaceIcon className={classes.icones} />
                    Author: {item.owner.login}
                  </Typography>
                  <Typography>
                    <FolderIcon className={classes.icones} />
                    <Button href={item.html_url} color="primary">
                      Acessar Repositório
                    </Button>
                  </Typography>
                  <Typography component="p">
                    <StarsIcon className={classes.icones} />
                    Stars: {item.stargazers_count}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </div>
  );
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={handleClose}
              aria-label="menu"
              style={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {body}
      </Dialog>
    </div>
  );
}
