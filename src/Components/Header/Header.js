import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#613dc1" ,
      flexGrow: 1,
     
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
export default function Header(){
 const classes = useStyles();
return (
    <div className={classes.root}>
    <AppBar style={{ backgroundColor: '#613dc1' }} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <GitHubIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Github List
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)
 


}
