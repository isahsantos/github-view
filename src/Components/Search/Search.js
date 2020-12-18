import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { getUserByUserName } from "../../services/GithubUsers";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
export default function SearchUser() {
  const [user, setUser] = useState([]);
  const [repo, setRepo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserByUserName(user).then((user) => {
      setUser(user);
    });
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <TextField
          id="home-searcher"
          name={user}
          label="Search for a GitHub user here XD"
          placeholder="GitHub User"
          helperText=""
          margin="normal"
          variant="outlined"
          required
          onChange={(e) => setUser(e.target.value)}
        />
        <div className="search-button-div">
          <Button variant="contained" color="primary" type="submit">
            <Search />
            Search
          </Button>
        </div>
      </form>
      <div>
      </div>
    </div>
  );
}
