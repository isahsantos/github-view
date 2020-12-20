import React, { useState, useEffect } from "react";
import { getRepoByUser } from "../../services/GithubUsers";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
export default function UserRepo(props) {
  var user = props.result;
  const [repositorie, setRepositories] = useState([]);

  useEffect(() => {
    getRepoByUser(user).then((repo) => {
      setRepositories(repo);
    });
  }, []);
  var data = Array.from(repositorie);
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <p>{item.name}</p>
            </div>
          );
        })}
    </div>
  );
}
