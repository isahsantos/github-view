import React, { useState } from "react";
import UserProfile from "../UserProfile/UserProfile";
import { TextField } from "@material-ui/core";
import { getUserByUserName } from "../../services/GithubUsers";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import "../../assets/style/Search.css";
export default function SearchUser() {
  var [hiden, setHiden] = useState(false);
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHiden(true);
    getUserByUserName(user).then((user) => {
      setUser(user);
    });
  };
  return (
    <>
      <div className="content-search" width="100%">
        <form method="POST" onSubmit={handleSubmit}>
          <TextField
            id="home-searcher"
            label="Busque por um usuário"
            placeholder="GitHub User"
            helperText=""
            margin="normal"
            variant="outlined"
            required
            onChange={(e) => setUser(e.target.value)}
          />
          <Button
            className="button"
            variant="contained"
            style={{
              backgroundColor: "#613dc1",
              color: "white",
              marginTop: 26,
              marginLeft: 20,
            }}
            type="submit"
          >
            <Search />
            Buscar
          </Button>
        </form>
      </div>
      <div>{hiden === true && <UserProfile result={user} />}</div>
    </>
  );
}
