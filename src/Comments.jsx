import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsById } from "./apis/api";

import SingleComment from "./components/singleComment";

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
        {comments.map((comment) => {
          return <SingleComment key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </>
  );
}

export default Comments;
