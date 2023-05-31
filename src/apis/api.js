import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-project-amaan.onrender.com",
});

function fetchGames() {
  return gamesApi
    .get("/api/reviews")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export default fetchGames;
