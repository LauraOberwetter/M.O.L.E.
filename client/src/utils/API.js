import axios from "axios";

export default {
  // Gets all modules
  getModules: function () {
    return axios.get("api/modules");
  },
  //   // Gets the post with the given id
  //   getPost: function (id) {
  //     return axios.get("/api/posts/" + id);
  //   },
  //   // Deletes the post with the given id
  //   deletePost: function (id) {
  //     return axios.delete("/api/posts/" + id);
  //   },
  //   // Saves a post to the database
  //   savePost: function (postData) {
  //     return axios.post("/api/posts", postData);
  //   },
};
