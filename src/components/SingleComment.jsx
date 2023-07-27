import createDate from "./date";
import { useState, useEffect } from "react";

function SingleComment(props) {
  props.comment.votesDown = 0;
  const [votesUp, setVotesUp] = useState(props.comment.votes);
  const [votesDown, setVotesDown] = useState(props.comment.votesDown);

  // if (obj === "nothing") {
  //   return <p key="nothing">No comments</p>;
  // }

  function voteChangeUp() {
    setVotesUp(votesUp + 1);
  }
  function voteChangeDown() {
    setVotesDown(votesDown + 1);
  }

  return (
    <li key={props.comment.comment_id}>
      <h4>{props.comment.author}</h4>
      <p>{props.comment.body}</p>
      <p>{createDate(props.comment.created_at)}</p>
      <button className="single-button" onClick={voteChangeUp}>
        👍
      </button>
      <p>{votesUp}</p>
      <button className="single-button" onClick={voteChangeDown}>
        👎
      </button>
      <p>{votesDown}</p>
    </li>
  );
}

export default SingleComment;
