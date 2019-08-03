import axios from "axios";

export default {

  getUsers: function(name) {
    return axios.get("/api/user", { params: { name: "name:" + name } });
  },

  getSavedUsers: function() {
    return axios.get("/api/users");
  },

  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  updateUser: function(name, userData) {
    console.log("userData", userData)
    console.log("name", name)

    return axios.put("/api/user/" + name, userData);
  }
};