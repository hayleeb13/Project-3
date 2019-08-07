import axios from "axios";

export default {

  getUsers: function() {
    return axios.get("/api/user");
  },

  getSavedUsers: function(name) {
    return axios.get("/api/user/name");
  },

  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },

  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  updateUser: function(name, userData) {
    console.log("userData", userData)
    console.log("name", name)

    return axios.put("/api/user/" + name, userData);
  }
};