import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleReview } from "./apis/api";
import Comments from "./Comments";
import createDate from "./components/date";

function SingleGame() {
  const [singleReview, setSingleReview] = useState([]);
  const [votes, setVotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    fetchSingleReview(review_id).then(({ review }) => {
      setVotes(review.votes);
      setSingleReview(review);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  function voteChangeUp() {
    setVotes(votes + 1);
  }

  function voteChangeDown() {
    setVotes(votes - 1);
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
        <button className="single-button" onClick={voteChangeDown}>
          👎
        </button>
        <button className="single-button" onClick={voteChangeUp}>
          👍
        </button>
        <p>
          <strong>{votes}</strong>
        </p>
      </div>
      <Comments />
    </>
  );
}

export default SingleGame;
