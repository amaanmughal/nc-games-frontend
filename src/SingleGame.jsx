import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleReview } from "./apis/api";
import Comments from "./Comments";
import createDate from "./components/date";

function SingleGame() {
  const [singleReview, setSingleReview] = useState([]);
  const [votesUp, setVotesUp] = useState([]);
  const [votesDown, setVotesDown] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    fetchSingleReview(review_id).then(({ review }) => {
      review.votesDown = 0;
      setVotesUp(review.votes);
      setVotesDown(review.votesDown);
      setSingleReview(review);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  function voteChangeUp() {
    setVotesUp(votesUp + 1);
  }

  function voteChangeDown() {
    setVotesDown(votesDown + 1);
  }

  return (
    <>
      <div id="single-card">
        <h2 id="single-title">{singleReview.title}</h2>
        <h4 className="single-designer">
          Game created by: {singleReview.designer}
        </h4>
        <center>
          <img
            className="single-img"
            src={singleReview.review_img_url}
            width="350px"
          />
        </center>
        <p className="single-review">{singleReview.review_body}</p>
        <p className="single-owner">created by: {singleReview.owner}</p>
        <p className="single-created">
          created at: {createDate(singleReview.created_at)}
        </p>
        <p className="single-cat">category: {singleReview.category}</p>
        <div className="thumbs-up">
          <button className="single-button" onClick={voteChangeUp}>
            👍
          </button>
          <p>
            <strong className="votes-up">{votesUp}</strong>
          </p>
        </div>
        <div className="thumbs-down">
          <button className="single-button" onClick={voteChangeDown}>
            👎
          </button>
          <p>
            <strong className="votes-down">{votesDown}</strong>
          </p>
        </div>
      </div>
      <Comments />
    </>
  );
}

export default SingleGame;
