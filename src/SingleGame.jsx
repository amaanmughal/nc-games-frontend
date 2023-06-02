import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleReview } from "./apis/api";
import Comments from "./Comments";
import createDate from "./components/date";

function SingleGame() {
  const [singleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    fetchSingleReview(review_id).then(({ review }) => {
      setSingleReview(review);
      setIsLoading(false);
    });
  }, []);

  // function createDate(currDate) {
  //   let newDate = new Date(currDate);

  //   let year = newDate.getFullYear();
  //   let day = newDate.getDate();
  //   let month = newDate.getDay();
  //   return `${day}/${month}/${year}`;
  // }

  if (isLoading) return <p>Loading...</p>;

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
        <button className="single-button">👎</button>
        <button className="single-button">👍</button>
        <p>
          <strong>{singleReview.votes}</strong>
        </p>
      </div>
      <Comments />
    </>
  );
}

export default SingleGame;
