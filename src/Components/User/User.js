import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../assets/style/User.css'
export default function User() {  
       return (
            <div>
                <div className="div-profile-card">
                    <Card className="profile-card">
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                title="User Profile Picture"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Teste
                            </Typography>
                            <Typography component="p">
                            teste
                            </Typography>
                            <br />
                            <Typography component="p">
                                Seguidores: {props}
                            </Typography>
                            <Typography component="p">
                                Seguindo:teste
                            </Typography>
                            <Typography component="p">
                                Repositorios : teste
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button  target="__blank" size="small" color="primary">
                                View Details
                            </Button>
                        </CardActions>
                        </Card>
                </div>
                   
            </div>
        ) 

    }
