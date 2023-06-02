import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchReviews from "./apis/api";

function GamesList() {
  const [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews().then(({ reviews }) => {
      setGamesList(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul id="gamesList">
        {gamesList.map((game) => {
          let endpoint = `/reviews/${game.review_id}`;
          return (
            <li key={game.review_id}>
              <Link to={endpoint}>
                <h3>{game.title}</h3>
              </Link>
              <img src={game.review_img_url} width="150px" height="150px" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default GamesList;
