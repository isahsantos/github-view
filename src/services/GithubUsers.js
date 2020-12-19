import Axios from "axios";

export async function getUserByUserName(username) {
  console.log("userName function => ", username);
  const retorno = await Axios.get("https://api.github.com/users/" + username);

  console.log("retorno => ", retorno);

  return retorno && retorno.data;
}

export async function getRepoByUser(username) {
  console.log("Repositorios function => ", username);
    const repos = await Axios.get(
      "https://api.github.com/users/" + username + "/repos"
    );

    console.log("Repositorios => ", repos);

    return repos && repos.data;
  
}
