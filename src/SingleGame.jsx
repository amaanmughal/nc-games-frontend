import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleReview } from "./apis/api";

function SingleGame() {
  const [singleReview, setSingleReview] = useState([]);

  const { review_id } = useParams();

  useEffect(() => {
    fetchSingleReview(review_id).then(({ review }) => {
      setSingleReview(review);
    });
  }, []);
  console.log(singleReview);

  let newDate = new Date(singleReview.created_at);

  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();
  let displayTime = `${hour}/${minute}/${second}`;

  let year = newDate.getFullYear();
  let day = newDate.getDate();
  let month = newDate.getDay();
  let displayDate = `${day}/${month}/${year}`;

  return (
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
        created at: {displayDate} {displayTime}
      </p>
      <p className="single-cat">category: {singleReview.category}</p>
    </div>
  );
}

export default SingleGame;
