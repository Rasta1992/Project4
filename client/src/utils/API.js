import axios from "axios";

export default {
  // Gets all Staff
  getStaff: function() {
    return axios.get("/api/staff");
  },
  // Gets the staff with the given id
  getStaff: function(id) {
    return axios.get("/api/staff/" + id);
  },
  // Deletes the staff with the given id
  deleteStaff: function(id) {
    return axios.delete("/api/staff/" + id);
  },
  // Saves a staff to the database
  saveStaff: function(staffData) {
    return axios.post("/api/staff", staffData);
  }
};
