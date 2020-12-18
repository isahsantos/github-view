import Axios from "axios";

export async function getUserByUserName(username) {
  console.log("userName function => ", username);
  const retorno = await Axios.get("https://api.github.com/users/" + username);

  console.log("retorno => ", retorno);

  return retorno && retorno.data;
}

const getRepoByUserName = (username) => {
  return Axios.get("https://api.github.com/users/" + username + "/repos");
};
const getStarred = (stars) => {
  return Axios.get("https://api.github.com/users/" + stars + "/repos");
};

