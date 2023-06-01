import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-project-amaan.onrender.com",
});

export const fetchReviews = () => {
  return gamesApi
    .get("/api/reviews")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const fetchSingleReview = (review_id) => {
  return gamesApi
    .get(`/api/reviews/${review_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export default fetchReviews;
