import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsById } from "./apis/api";
import createDate from "./components/date";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    fetchCommentsById(review_id).then(({ comments }) => {
      if (comments.length === 0) {
        setComments(["nothing"]);
        setIsLoading(false);
      } else {
        setComments(comments);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h2 id="comments-title">Comments 💬</h2>
      <ul id="comments-list">
        {comments.map((obj) => {
          if (obj === "nothing") {
            return <p key="nothing">No comments</p>;
          }
          return (
            <li key={obj.comment_id}>
              <h4>{obj.author}</h4>
              <p>{obj.body}</p>
              <p>{createDate(obj.created_at)}</p>
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
