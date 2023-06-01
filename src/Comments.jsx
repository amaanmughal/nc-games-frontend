import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "./apis/api";

function Comments() {
  const [comments, setComments] = useState([]);

  const { review_id } = useParams();

  useEffect(() => {
    fetchComments(review_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <h2 id="comments-title">Comments 💬</h2>
      <ul id="comments-list">
        {comments.map((obj) => {
          let newDate = new Date(obj.created_at);

          let year = newDate.getFullYear();
          let day = newDate.getDate();
          let month = newDate.getDay();
          let displayDate = `${day}/${month}/${year}`;

          return (
            <li key={obj.comment_id}>
              <h4>{obj.author}</h4>
              <p>{obj.body}</p>
              <p>{displayDate}</p>
              <button className="single-button">👎</button>
              <button className="single-button">👍</button>
              <p>{obj.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Comments;
