import React, { useState, useEffect } from "react";
import UserProfile from "../Modal/UserProfile"
import { TextField } from "@material-ui/core";
import { getUserByUserName } from "../../services/GithubUsers";
import { getRepoByUser } from "../../services/GithubUsers";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import "../../assets/style/Search.css";
export default function SearchUser(userProps) {
  var [hiden, setHiden] = useState(false);
  const [user, setUser] = useState([]);
  const [repo, setRepo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHiden(true);
    getUserByUserName(user).then((user) => {
      setUser(user)
    });
    getRepoByUser(repo).then((repo) => {
      setRepo(repo);
      console.log("Repo =>", repo);
    });
  };
  useEffect(() => {
    hiden = false;
  });

  userProps = user;
  console.log("Props Searcg",userProps)
  return (
    <>
      <div className="content-search" width="100%">
      <form method="POST" onSubmit={handleSubmit}>
        <TextField
          id="home-searcher"
          name={user}
          label="Busque por um usuário"
          placeholder="GitHub User"
          helperText=""
          margin="normal"
          variant="outlined"
          required
          onChange={(e) => setUser(e.target.value)}
        />
          <Button className="button" variant="contained" style={{ backgroundColor: '#613dc1', color:'white',marginTop:26,marginLeft:20 }} type="submit">
            <Search />
            Search
          </Button>
      </form>
      </div>
    
     
      <div>
        {hiden === true && (
         <UserProfile result = {user}/>
        )}
      </div>
      </>
  );
}
