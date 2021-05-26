import * as actions from "./types.js";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
    dispatch({
      type: actions.FETCH_POSTS,
      payload: res.data,
    })
  );
};

export const createPost = (postData) => (dispatch) => {
  const body = JSON.stringify(postData);
  const options = {
    headers: { "content-type": "application/json" },
  };

  axios
    .post("https:/jsonplaceholder.typicode.com/posts", body, options)
    .then((res) => {
      console.log("RESPO ", res.data);
      dispatch({
        type: actions.NEW_POST,
        payload: res.data,
      });
    });

  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => res.json())
  //   .then((posts) =>
  //     dispatch({
  //       type: actions.FETCH_POSTS,
  //       payload: posts,
  //     })
  //   );
};
