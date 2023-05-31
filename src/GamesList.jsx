import { useState, useEffect } from "react";
import fetchGames from "./apis/api";

function GamesList() {
  const [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGames().then(({ reviews }) => {
      setGamesList(reviews);
      setIsLoading(false);
    });
  }, []);

  let gamesArr = gamesList;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul id="gamesList">
        {gamesArr.map((game) => {
          return (
            <li key={game.review_id}>
              <h3>{game.title}</h3>
              <img src={game.review_img_url} width="150px" height="150px" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default GamesList;
